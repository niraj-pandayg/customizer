import React from "react";

import ToolbarCSS from "./Toolbar.css";
import Text from "./Text/Text.js";
import Image from "./Image/Image.js";
import Shape from "./Shape/Shape.js";
import Template from "./Template/Template.js";

export default class Toolbar extends React.Component {
  constructor() {
    super();
    this.state
  }
  render() {
    var toolbarContent;
    if (this.props.activeObject == null) {
      toolbarContent = "Home";
    } 
    else if(this.props.activeObject == 'image'){
      toolbarContent = <Image />;
    }
    else if(this.props.activeObject == 'text'){
      toolbarContent = <Text />;
    }
    else if(this.props.activeObject == 'shape'){
      toolbarContent = <Shape />;
    }
    else if(this.props.activeObject == 'template'){
      toolbarContent = <Template />;
    }
    return (
      <div/>
    );
  }
}