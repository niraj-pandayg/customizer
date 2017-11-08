import React from "react";
import ReactDOM from "react-dom";

import TemplateCSS from "./Template.css";
import Fabric_Text from "../../../CanvasBox/fabric-components/Template6.js";
import Fabric_Shape from "../../../CanvasBox/fabric-components/Shape.js";
var that;
export default class Template6 extends React.Component {
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
  textChangeMobile(){
    var name = new Fabric_Text({
      text:that.state.textChangeEmail,    
    });
    name.createMobile();
  }
  textChangeEmail(){
    var name = new Fabric_Text({
      text:that.state.textChangeCompany,    
    });
    name.createEmail();
  }
  textChangeCompanyWeb(){
    var name = new Fabric_Text({
      text:that.state.textChangeCompanyWeb,    
    });
    name.createCompanyWeb();
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
    this.textChangeMobile()    
    this.textChangeEmail()
    this.textChangeCompanyWeb()
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
                <input type="text" class="inputfile" placeholder="Enter Title.." id="inputfile"  onBlur={that.textChangeTitle}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Mobile.." id="inputfile"  onBlur={that.textChangeMobile}/>
        </div>        
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Company Website.." id="inputfile"  onBlur={that.textChangeCompanyWeb}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Email.." id="inputfile"  onBlur={that.textChangeEmail}/>
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