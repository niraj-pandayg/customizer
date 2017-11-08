import React from "react";
import ReactDOM from "react-dom";

import TemplateCSS from "./Template.css";
import Template1 from "./Template1.js";
import Template2 from "./Template2.js";
import Template3 from "./Template3.js";
import Template4 from "./Template4.js";
import Template5 from "./Template5.js";
import Template6 from "./Template6.js";
import Template7 from "./Template7.js";
import Template8 from "./Template8.js";
import Template9 from "./Template9.js";
import Template10 from "./Template10.js";

import CanvasBox from "../../../CanvasBox/CanvasBox.js";
// import Canvas from "../../../CanvasBox/fabric-components/Canvas.js"; oncontextmenu="return false"
import FabricStore from "../../../../stores/FabricStore.js";

var that;
// var SelTemplate;
export default class Template extends React.Component {
  constructor() {
    super();
    this.state = {
      SelTemplate:'',
      TemplateJSON:[
        'media/template1.jpg',
        'media/template2.jpg',
        'media/template3.jpg',
        'media/template4.jpg',
        'media/template5.jpg',
        'media/template6.jpg',
        'media/template7.jpg',
        'media/template8.jpg',
        'media/template9.jpg',
        'media/template10.jpg',
      ]
    };
    that = this;
  }
  addTemplate(event){
    debugger;
    var object = event.target.dataset.src;
    if (object === 'media/template1.jpg') 
      {
        var canvas=FabricStore.getCanvas();
        var objs = canvas.getObjects().map(function(o) {
          return o.set('active', true);
        });
        var group = new fabric.Group(objs, {
          originX: 150, 
          originY: 150
        });
         canvas.discardActiveGroup().renderAll();       
      that.setState( { SelTemplate : <Template1 />});
      
      }
    else if (object === 'media/template2.jpg')
      {
        var canvas=FabricStore.getCanvas();
        var objs = canvas.getObjects().map(function(o) {
          return o.set('active', true);
        });
        var group = new fabric.Group(objs, {
          originX: 150, 
          originY: 150
        });
         canvas.discardActiveGroup().renderAll();  
        that.setState( { SelTemplate : <Template2 />});
      }
    else if (object === 'media/template3.jpg')
      {
        var canvas=FabricStore.getCanvas();
        var objs = canvas.getObjects().map(function(o) {
          return o.set('active', true);
        });
        var group = new fabric.Group(objs, {
          originX: 150, 
          originY: 150
        });
         canvas.discardActiveGroup().renderAll();  
          that.setState( { SelTemplate : <Template3 />});
      }
      else if (object === 'media/template4.jpg')
      {
        var canvas=FabricStore.getCanvas();
        var objs = canvas.getObjects().map(function(o) {
          return o.set('active', true);
        });
        var group = new fabric.Group(objs, {
          originX: 150, 
          originY: 150
        });
         canvas.discardActiveGroup().renderAll();
        that.setState( { SelTemplate : <Template4 />});
      }    
     else if (object === 'media/template5.jpg')
      {
        var canvas=FabricStore.getCanvas();
        var objs = canvas.getObjects().map(function(o) {
          return o.set('active', true);
        });
        var group = new fabric.Group(objs, {
          originX: 150, 
          originY: 150
        });
         canvas.discardActiveGroup().renderAll(); 
        that.setState( { SelTemplate : <Template5 />});
      }
      else if (object === 'media/template6.jpg')
      {
        var canvas=FabricStore.getCanvas();
        var objs = canvas.getObjects().map(function(o) {
          return o.set('active', true);
        });
        var group = new fabric.Group(objs, {
          originX: 150, 
          originY: 150
        });
         canvas.discardActiveGroup().renderAll(); 
        that.setState( { SelTemplate : <Template6 />});
      }
      else if (object === 'media/template7.jpg')
      {
        var canvas=FabricStore.getCanvas();
        var objs = canvas.getObjects().map(function(o) {
          return o.set('active', true);
        });
        var group = new fabric.Group(objs, {
          originX: 150, 
          originY: 150
        });
         canvas.discardActiveGroup().renderAll(); 
        that.setState( { SelTemplate : <Template7 />});
      }
      else if (object === 'media/template8.jpg')
      {
        var canvas=FabricStore.getCanvas();
        var objs = canvas.getObjects().map(function(o) {
          return o.set('active', true);
        });
        var group = new fabric.Group(objs, {
          originX: 150, 
          originY: 150
        });
         canvas.discardActiveGroup().renderAll();  
        that.setState( { SelTemplate : <Template8 />});
      }
      else if (object === 'media/template9.jpg')
      {
        var canvas=FabricStore.getCanvas();
        var objs = canvas.getObjects().map(function(o) {
          return o.set('active', true);
        });
        var group = new fabric.Group(objs, {
          originX: 150, 
          originY: 150
        });
         canvas.discardActiveGroup().renderAll(); 
        that.setState( { SelTemplate : <Template9 />});
      }
      else if (object === 'media/template10.jpg')
      {
        var canvas=FabricStore.getCanvas();
        var objs = canvas.getObjects().map(function(o) {
          return o.set('active', true);
        });
        var group = new fabric.Group(objs, {
          originX: 150, 
          originY: 150
        });
         canvas.discardActiveGroup().renderAll(); 
        that.setState( { SelTemplate : <Template10 />});
      }
    else
      return;  
  }
  render() {
    var currentClass = "col-md-12 template-container "+this.props.visibility;
    return (
      <div class={currentClass}>
        {
          this.state.TemplateJSON.map(function (backgroundImage,index) {
            var imageStyle = {
              backgroundImage:'url('+backgroundImage+')'
            }
            return(
              <div onClick={that.addTemplate.bind(this)} key={index} data-src={backgroundImage} class="template-container-content col-md-12" style={imageStyle}></div>
            );
          })
        }
        {that.state.SelTemplate}
      </div>
    );
  }
}