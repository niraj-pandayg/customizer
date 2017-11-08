import React from "react";
import ReactDOM from "react-dom";

import TemplateCSS from "./Template.css";
import Fabric_Text from "../../../CanvasBox/fabric-components/Template4.js";
import Fabric_Shape from "../../../CanvasBox/fabric-components/Shape.js";
import Fabric_Image from "../../../CanvasBox/fabric-components/Image.js";
var that;
export default class Template4 extends React.Component {
  constructor() {
    super();
    this.state = {
     textChangeName:'A',
     textChangeCompany:'A',
     textChangeTitle:'A',
     textChangeCompanyWeb:'A',  
     textChangeMobile:'A',
     textChangeEmail:'A',
     textChangeAddress1:'A',
     textChangeAddress2:'A',
    TemplateJSON:[{ text:'A',width:150 } ]
    };
    that = this;
  }
   textChangeName(){
        var name = new Fabric_Text({
            top 		: 90, // coord x
			left 		: 450, // coord y
          text:that.state.textChangeName,    
        });
        name.createName();
  }  
  textChangeTitle(){
    var name = new Fabric_Text({
        top 		: 120, // coord x
        left 		: 450, // coord y
      text:that.state.textChangeTitle,    
    });
    name.createTitle();
  } 
  textChangeEmail(){
    var name = new Fabric_Text({
        top 		: 280, // coord x
        left 		: 450, // coord y
      text:that.state.textChangeEmail,    
    });
    name.createEmail();
  }
  textChangeCompany(){
    var name = new Fabric_Text({
        top 		: 240, // coord x
        left 		: 120, // coord y
      text:that.state.textChangeCompany,    
    });
    name.createCompany();
  }
  textChangeCompanyWeb(){
    var name = new Fabric_Text({
        top 		: 320, // coord x
        left 		: 450, // coord y
      text:that.state.textChangeCompanyWeb,    
    });
    name.createCompanyWeb();
  }
  addShape1(object){    
   var circle = new Fabric_Shape();
   circle.createCircle1();
  }
  addShape2(object){    
    var circle = new Fabric_Shape();
    circle.createCircle2();
  }
  addShape3(object){    
    var circle = new Fabric_Shape();
    circle.createCircle3();
  }
  addShape4(object){    
    var circle = new Fabric_Shape();
    circle.createCircle4();
  }
  addLogoBox()
   {
    var box = new Fabric_Shape();
    box.createLogo();
   }
   addLogoText()
   {
    var name = new Fabric_Text({
    text:that.state.textChangeCompanyWeb,    
   });
   name.createLogoText()
   }
  componentWillMount()  {
    this.textChangeName()
    this.textChangeTitle()
    this.textChangeEmail()
    this.textChangeCompany()
    this.textChangeCompanyWeb()
    this.addShape1()
    this.addShape2()
    this.addShape3()
    this.addShape4()
    this.addLogoBox()
    this.addLogoText()
  }
  render() {
    var currentClass = "col-md-12 template-container "+this.props.visibility;
     return (
        <div class={currentClass}>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Name.." id="inputfile"  onBlur={that.textChangeName}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Company Name.." id="inputfile"  onBlur={that.textChangeCompany}/>
        </div>            
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Title.." id="inputfile"  onBlur={that.textChangeTitle}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Company Website.." id="inputfile"  onBlur={that.textChangeCompanyWeb}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Email.." id="inputfile"  onBlur={that.textChangeEmail}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="ADD LINE" id="inputfile"  onBlur={that.addShape1}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="ADD LINE" id="inputfile"  onBlur={that.addShape2}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="ADD LINE" id="inputfile"  onBlur={that.addShape3}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="ADD LINE" id="inputfile"  onBlur={that.addShape4}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="ADD LINE" id="inputfile"  onBlur={that.addLogo}/>
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