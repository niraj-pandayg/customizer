import React from "react";
import ReactDOM from "react-dom";

import TemplateCSS from "./Template.css";
import Fabric_Text from "../../../CanvasBox/fabric-components/Template2.js";

var that;
export default class Template2 extends React.Component {
  constructor() {
    super();
    this.state = {
     textChangeCompany:'Apple Inc.',
     textChangeCompanyWeb:'www.apple.com',   
     textChangeTitle:'CEO',
     textChangeName:'Steve Jobs',
     textChangeMobile:'1234567890',
     textChangeEmail:'stevejobs@apple.com',
     textChangeAddress1:'123,Mount View',
     textChangeAddress2:'CA, USA',
    TemplateJSON:[{ text:'A',width:30 } ]
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
      text:that.state.textChangeMobile,    
    });
    name.createMobile();
  }  
  textChangeEmail(){
    var name = new Fabric_Text({
      text:that.state.textChangeEmail,    
    });
    name.createEmail();
  }  
  textChangeAddress1(){
    var name = new Fabric_Text({
      text:that.state.textChangeAddress1,    
    });
    name.createAddress1();
  }
  textChangeAddress2(){
    var name = new Fabric_Text({
      text:that.state.textChangeAddress2,    
    });
    name.createAddress2();
  }  
  textChangeCompany(){
    var name = new Fabric_Text({
      text:that.state.textChangeCompany,    
    });
    name.createCompany();
  }
  textChangeCompanyWeb(){
    var name = new Fabric_Text({
      text:that.state.textChangeCompanyWeb,    
    });
    name.createCompanyWeb();
  }
  componentWillMount()  {
    this.textChangeName()
    this.textChangeTitle()
    this.textChangeMobile()
    this.textChangeEmail()
    this.textChangeAddress1()
    this.textChangeAddress2()
    this.textChangeCompany()
    this.textChangeCompanyWeb()
  }
  render() {
    var currentClass = "col-md-12 template-container "+this.props.visibility;
     return (
        <div class={currentClass}>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Company Name.." id="inputfile"  onBlur={that.textChangeCompany}/>
        </div>            
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Company Website.." id="inputfile"  onBlur={that.textChangeCompanyWeb}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Title.." id="inputfile"  onBlur={that.textChangeTitle}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Name.." id="inputfile"  onBlur={that.textChangeName}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Mobile.." id="inputfile"  onBlur={that.textChangeMobile}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Email.." id="inputfile" id="inputfile"  onBlur={that.textChangeEmail}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Address Line 1.." id="inputfile"  onBlur={that.textChangeAddress1}/>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 mt-10 text-center">
                <input type="text" class="inputfile" placeholder="Enter Address Line 2.." id="inputfile"  onBlur={that.textChangeAddress2}/>
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