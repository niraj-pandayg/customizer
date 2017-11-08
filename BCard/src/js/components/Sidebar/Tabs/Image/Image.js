import React from "react";
import ReactDOM from "react-dom";

import ImageCSS from "./Image.css";
import Fabric_Image from "../../../CanvasBox/fabric-components/Image.js";
import Canvas from "../../../CanvasBox/fabric-components/Canvas.js";
import FabricStore from "../../../../stores/FabricStore.js";

var that;
export default class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      ImageJSON:[]
    };
    that = this;
  }
  addImage(event){
    debugger;
    var object = event.target.dataset.src;
    var image = new Fabric_Image({
      src:event.target.dataset.src,
    });
    image.create();
  }
  delImage(){
  // if (FabricStore.getActiveObject().get('type') === "image")
     var c = FabricStore.getCanvas();
      var activeObject = c.getActiveObject();
      c.remove(activeObject);
    
  }
editImage(event){  
    debugger;
 var c = FabricStore.getCanvas();
 var activeObject = c.getActiveObject();
 var Left = activeObject.getLeft();  
 var Top = activeObject.getTop();  
 c.remove(activeObject); 
 var object = event.target.dataset.src;
 var Newimage = new Fabric_Image({
   top:Top,
   left:Left,
   src:event.target.dataset.src,
 });
 Newimage.create();
} 
  addImageList(event){
    var reader = new FileReader();
    console.log(event.target.files[0]);
    if(event.target.files[0]){
      reader.readAsDataURL(event.target.files[0]);
    }else{
    }
    reader.onloadend = function(){
      var temp = that.state.ImageJSON;
      temp.push(reader.result);
      that.setState({ImageJSON: temp});
  }
  }
  clickUpload(){
    debugger;
    document.getElementById("infile").click();
  }
  render() {
    var currentClass = "col-md-12 image-container "+this.props.visibility;
    return (
      <div class={currentClass}>   
        <div class="col-md-12 text-center">
          <input type="file" onChange={that.addImageList.bind(this)} id="infile" class="infile" />
          </div>
          <div class="col-md-12 text-center">
          <button onClick={this.clickUpload} class="btn btn-primary">Choose your photo <i class="fa fa-upload"></i></button>
        </div>
        {
          this.state.ImageJSON.map(function (backgroundImage,index) {
            var imageStyle = {
              backgroundImage:'url('+backgroundImage+')'
            }
            return(
              <div class="mt-10 col-md-12 text-center">
               <div onClick={that.addImage.bind(this)} key={index} data-src={backgroundImage} class="image-container-content col-md-6" style={imageStyle}></div>
              </div>
            );
          })
        }
        <div class="mt-10 col-md-12 text-center">
          <button class="btn btn-primary" onClick={that.editImage.bind(this)}>Edit Image</button>   
          <button class="btn btn-primary" onClick={that.delImage.bind(this)}>Delete Image</button>                 
        </div>
        <div style={{fontSize: '16px',color: "#999"}} class="mt-10 text-center">
           If you want to edit your image, Select on edit button and select the image from the list to change the image.
        </div> 
        </div>
    );
  }
}