import React from "react";
require('fabric');
import {Container} from 'flux/utils';
var ReactDOM = require('react-dom');
import CheckBox from 'material-ui/CheckBox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Router,Route,browserHistory} from "react-router";

import CanvasBoxCSS from "./CanvasBox.css";

import ZoomToolbox from "./ZoomToolbox/ZoomToolbox.js";
import Toolbar from "./Toolbar/Toolbar.js";

import Canvas from "./fabric-components/Canvas.js";
import Image from "./fabric-components/Image.js";
import Text from "./fabric-components/Text.js";

import FabricStore from "../../stores/FabricStore.js";
import TBack from "../../components/CanvasBox/tback.js";
import TFront from "../../components/CanvasBox/tfront.js";

export default class CanvasBox extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
    this.onCheck = this.onCheck.bind(this);
    this.saveImg=this.saveImg.bind(this);
    // this.bringfront=this.bringfront.bind(this);
  }
  onCheck() {
    this.setState({
      checked: !this.state.checked             
    });
  }  
  saveImg(e)
   { 
    var canvas=FabricStore.getCanvas();
    var data=canvas.toDataURL({
    format: 'jpeg',
    quality: 1,
    // multiplier:2,
    });
    var a  = document.createElement('a');
    a.href = data;
    a.download = '';

    a.click()
   }
  //  bringfront(e)
  //  {
  //    var object = FabricStore.getActiveObject();
     
  //    FabricStore.getCanvas().bringToFront(object); 
  //  }
  render() {
    let style = {
      marginTop: '40px',
      marginBottom: '0px'
    };
    const content = this.state.checked 
    ? ( <TBack /> ) : <TFront />;
    // const content = this.state.checked 
    // ? null  : null;
    return (
      <div class="canvas-box">
        <Toolbar activeObject={this.state.activeObject}/>
        <div class="section no-pad-bot no-pad-top">
        <div class="mt-10 col-md-12 text-center">
          <button class="btn btn-primary" onClick={this.saveImg}>Save Image <i class="fa fa-download"></i></button>
          {/* <button class="btn btn-primary" onClick={this.bringfront}>Bring to Front</button> */}
        </div>
        <MuiThemeProvider>          
        <CheckBox
        label="Flip T-Shirt."
        labelPosition="right"
        checked={this.state.checked} 
        onCheck={this.onCheck} />         
        </MuiThemeProvider> 
          <canvas id = "canvas" >
            {content}
          </canvas>
        </div>
        <ZoomToolbox />
      </div>
    );
  }
}