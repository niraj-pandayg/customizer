import React from "react";
import ReactDOM from "react-dom";

import TemplateCSS from "./Template.css";
import Fabric_Text from "../../../CanvasBox/fabric-components/Template9.js";
import Fabric_Shape from "../../../CanvasBox/fabric-components/Shape.js";

var that;
export default class Template9 extends React.Component {
  constructor() {
    super();
    this.state = {
      textChangeName:'A',
      textChangeTitle:'A',
      textChangeMobile:'A',
      textChangeEmail:'A',
      textChangeCompany:'A',
      textChangeCompanyWeb:'A',
        TemplateJSON:[{ text:'A', width:30 } ]
    };
    that = this;
  }
   textChangeName(){
        var name = new Fabric_Text({
          text:that.state.textChangeName,    
        });
        name.createName();
  }  
  textChangeTitle(){
    var name = new Fabric_Text({
      text:that.state.textChangeTitle,    
    });
    name.createTitle();
  }
  textChangeEmail(){
    var name = new Fabric_Text({
      text:that.state.textChangeEmail,    
    });
    name.createEmail();
  }  
  textChangeCompany(){
    var name = new Fabric_Text({
      text:that.state.textChangeCompany,    
    });
    name.createCompany();
  }
  addShape(object){    
   var shape = new Fabric_Text();
     shape.createLine();
 }
 addLineLef(){
    var shape = new Fabric_Text();
    shape.createLineLeft();
 }
 addLineRig(){
    var shape = new Fabric_Text();
    shape.createLineRight();
}
 addLineTop(){
    var shape = new Fabric_Text();
    shape.createLineTop();
}
 addLineBot(){
    var shape = new Fabric_Text();
    shape.createLineBottom();
}
  componentWillMount() {
    this.textChangeName()
    this.textChangeTitle()
    this.textChangeEmail()
    this.textChangeCompany()    
    this.addShape()
    this.addLineTop()
    this.addLineBot()
    this.addLineLef()
    this.addLineRig()
  }
  render() {
    var currentClass = "col-md-12 template-container "+this.props.visibility;
      return (
        <div class={currentClass}>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Name.." id="inputfile"  onBlur={that.textChangeName}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Designation.." id="inputfile"  onBlur={that.textChangeTitle}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Mobile.." id="inputfile"  onBlur={that.textChangeMobile}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Email.." id="inputfile"  onBlur={that.textChangeEmail}/>
        </div>
       <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="ADD LINE" id="inputfile"  onBlur={that.addShape}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Company Name.." id="inputfile"  onBlur={that.textChangeCompany}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Company Website.." id="inputfile"  onBlur={that.textChangeCompanyWeb}/>
        </div>

        {/* <div class="mt-10 col-md-12 text-center">
            <button class="btn btn-primary" onClick={that.addTemplate.bind(this)}>Add Text</button>
        </div> */}
          {/* {
            this.state.TemplateJSON.map(function (backgroundImage,index) {
              var imageStyle = {
                backgroundImage:'url('+backgroundImage+')'
              }

                ); */}
            {/* })
          } */}
        </div>
      );
  }
}