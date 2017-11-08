import React from "react";
import ReactDOM from "react-dom";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { CompactPicker  } from "react-color";

import Fabric_Shape from "../../../CanvasBox/fabric-components/Shape.js";
import Canvas from "../../../CanvasBox/fabric-components/Canvas.js";
import FabricStore from "../../../../stores/FabricStore.js";

var that;
export default class Shape extends React.Component {
  constructor() {
    super();
    this.state = {
              type:"Rect",
              fill:"",
              stroke:"#212121",
              strokeWidth :1,
      ShapeJSON:[{type:"Rect", fill:"",stroke:"#212121",strokeWidth :1,}]
    }          
    that = this;
  }
  addShape(object){
     
    var shape = new Fabric_Shape({
      type:object.type,
      fill:object.fill,
      stroke:object.stroke,
      strokeWidth:object.strokeWidth,
    }); 
    if (object.type === 'Rect')
    shape.createRect();
   else if (object.type === 'Circle')
      shape.createCircle();
   else if (object.type === 'Line')
      shape.createLine();
   else if (object.type === 'Ellipse')
    shape.createEllipse();
   else
    shape.createRect();
  }

  editShape(object){  
  var c = FabricStore.getCanvas();
  var activeObject = c.getActiveObject();
  var Left = activeObject.getLeft();  
  var Top = activeObject.getTop();  
  c.remove(activeObject); 
  var newShape = new Fabric_Shape ({
    top:Top,
    left:Left,
    type:object.type,
    fill:object.fill,
    stroke:object.stroke,
    strokeWidth:object.strokeWidth,
  });
  if (object.type === 'Rect')
    newShape.createRect();
  else if (object.type === 'Circle')
    newShape.createCircle();
  else if (object.type === 'Line')
    newShape.createLine();
  else if (object.type === 'Ellipse')
    newShape.createEllipse();
  else
    newShape.createRect();
}  
delShape(){  
//if (FabricStore.getActiveObject().get('type') === "shape")
     var c = FabricStore.getCanvas();
      var activeObject = c.getActiveObject();
      c.remove(activeObject);
    
  } 
 
  shapeChange(item){
    var temp = that.state.ShapeJSON[0];
    var tempArray = [];
    temp.type = item.value;
    tempArray.push(temp);
    that.setState({ShapeJSON: tempArray, type: item.value});
  }
  colorChange(color){
    var temp = that.state.ShapeJSON[0];
    var tempArray = [];
    temp.fill = color.hex;
    tempArray.push(temp);
    that.setState({ShapeJSON: tempArray, fill: color.hex});
  }
  strokeChange(color){
    var temp = that.state.ShapeJSON[0];
    var tempArray = [];
    temp.stroke = color.hex;
    tempArray.push(temp);
    that.setState({ShapeJSON: tempArray, stroke: color.hex});
  }
  strokeSize(item){
    var temp = that.state.ShapeJSON[0];
    var tempArray = [];
    temp.strokeWidth = item.value;
    tempArray.push(temp);
    that.setState({ShapeJSON: tempArray, strokeWidth: item.value});
  }
  render() {
    var typeofshape = [
      { value: 'Circle', label: 'Circle' },
      { value: 'Rect', label: 'Square' },
      { value: 'Line', label: 'Line' },
      { value: 'Ellipse', label: 'Ellipse' },
    ];
    var optionsSize = [
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4' },
      { value: 5, label: '5' },
    ];
    var currentClass = "col-md-12 addShape "+this.props.visibility;
    return (
      <div class={currentClass}>
     <div style={{fontSize: '16px',color: "#999"}} class="mt-10 text-center">
       Step 1: Select color of shape    
    <div class="col-md-12">
        <CompactPicker onChange={that.colorChange.bind(this)} color={this.state.fill}/>
    </div>
    </div>  
    <div style={{fontSize: '16px',color: "#999"}} class="mt-10 text-center">
   Step 2: Select Shape
   
          <Select
            name="form-field-name"
            placeholder="Select Shape.."
            value={that.state.type}
            options={typeofshape}
            onChange={that.shapeChange.bind(this)}
            class="col-md-12 mt-10"
          />
    </div>      
    <div style={{fontSize: '16px',color: "#999"}} class="mt-10 text-center">
       Step 3: Select color of Border
    <div class="col-md-12">
        <CompactPicker onChange={that.strokeChange.bind(this)} color={this.state.stroke}/>
    </div>
    </div>
    <div style={{fontSize: '16px',color: "#999"}} class="mt-10 text-center">
      Step 4: Select Border Size    
          <Select
            name="form-field-name"
            placeholder="Select borderwidth.."
            value={that.state.strokeWidth}
            options={optionsSize}
            onChange={that.strokeSize.bind(this)}
            class="col-md-12 mt-10"
          />   
    </div>         
         {
            this.state.ShapeJSON.map(function (object,index) {
              var shapeType = {
                object:'url('+object+')',
          }
              return(
                <div key={index}>
                <div style={{fontSize: '16px',color: "#999"}} class="mt-10 text-center">                
                  <div class="pointer" data-attr={JSON.stringify(object)}/> 
                 </div>  
                 <div style={{fontSize: '16px',color: "#999"}} class="mt-10 text-center">
                   Step 5 : Add Shape   
                 </div>    
                  <div class="mt-10 col-md-12 text-center">              
                   <button class="btn btn-primary" onClick={that.addShape.bind(this, object)}>Add Shape</button>                
                   <button class="btn btn-primary" onClick={that.delShape.bind(this)}>Delete Shape</button>
                   <button class="btn btn-primary" onClick={that.editShape.bind(this,object)}>Edit Shape</button>
                 </div>
                </div>
            );    
           })
        }
      </div>
    );
  }
}