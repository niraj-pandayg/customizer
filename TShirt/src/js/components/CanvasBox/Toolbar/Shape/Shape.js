import React from "react";

import ShapeCSS from "./Shape.css";
export default class Shape extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="shape-toolbar">
        Shapes
      </div>
    );
  }
}