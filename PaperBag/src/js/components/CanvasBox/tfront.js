import React from "react";
import {Container} from 'flux/utils';
var ReactDOM = require('react-dom');

import CanvasBoxCSS from "./CanvasBox.css";

import ZoomToolbox from "./ZoomToolbox/ZoomToolbox.js";
import Toolbar from "./Toolbar/Toolbar.js";

import Canvas from "./fabric-components/Canvas.js";
import Image from "./fabric-components/Image.js";
import Text from "./fabric-components/Text.js";

import FabricStore from "../../stores/FabricStore.js";

var c = new Canvas({
  width:400,
  height:500,
  id:'canvas',
});
var currentObject;
export default class TFront extends React.Component {
  
  constructor() {
    super();
    this.state = {
      activeObject:null,
      value:'media/bag_front.png',
      FrontJSON:[]
    };    
    currentObject = this;
  }
  componentDidMount () {
    var canvas=FabricStore.getCanvasFront();
    FabricStore.setSide("front"); 
    if (currentObject.state.activeObject === null)
    {
      currentObject._tfront()
    }
    else
    {
      var objs = canvas.getObjects().map(function(o) {
        return o.set('active', true);
      });
      var group = new fabric.Group(objs, {
        originX: 'center', 
        originY: 'center'
      });
      canvas.loadFromJSON(FrontJSON, canvas.renderAll.bind(canvas));
    }
  }
  _tfront (){     
    FabricStore.setSide("front");
    var el = ReactDOM.findDOMNode(currentObject);
    c.init();
    c.addTshirtOverlay(currentObject.state.value);
    c.centerCanvas();
  }
  componentWillMount(){
    FabricStore.on("change",() => {
      currentObject.setState({
        activeObject:FabricStore.getActiveObject()
      });
    });
  }
  componentWillUpdate(){
    FabricStore.on("change",() => {
      debugger;
      currentObject.setState({
        activeObject:FabricStore.getActiveObject()
      });
    });
}
componentWillUnmount(){
  debugger;
  var canvas=FabricStore.getCanvasFront();
  var objs = canvas.getObjects().map(function(o) {
    return o.set('active', true);
  }); 
  var group = new fabric.Group(objs, {
    originX: 150, 
    originY: 150
  });
  var temp = currentObject.state.FrontJSON[0];
  var tempArray = [];
  temp = group;
  tempArray.push(temp);
  currentObject.setState({FrontJSON: tempArray,activeObject:null}); 
  FabricStore.on("change",() => {
    currentObject.setState({
      activeObject:null
    });
  }); 
  canvas.discardActiveGroup().renderAll();
  // canvas.setActiveObject()=null; 
  FabricStore.setActiveObject(null);
}
 render() {
    return (
      <div>
      <div class="canvas-box">
        <div class="section no-pad-bot no-pad-top">
          <canvas id = "canvas" ></canvas>
        </div>
      </div>
      </div>
    );
  }
}