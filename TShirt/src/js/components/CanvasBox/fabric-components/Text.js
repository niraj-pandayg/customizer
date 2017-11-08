require('fabric');
import FabricStore from "../../../stores/FabricStore.js";
import Canvas from "../fabric-components/Canvas.js";

class Fabric_Text {
	constructor(object) {
		// this.canvas.init();
		// this.fs 		    = FabricStore.getCanvas();
		this.canvas 		= FabricStore.getCanvas();
		this.canvasFront	= FabricStore.getCanvasFront();
		this.canvasBack 	= FabricStore.getCanvasBack();
		this.top 			= (object && typeof object.top != "undefined") ? object.top : this.canvas.height/2;
		this.left 			= (object && typeof object.left != "undefined") ? object.left : this.canvas.width/2;
		this.angle 			= (object && typeof object.angle != "undefined") ? object.angle : 0;
		this.text 			= (object && typeof object.text != "undefined") ? object.text : 'Insert Your Text Here';
		this.fill 			= (object && typeof object.fill != "undefined") ? object.fill : '#000000';
		this.fontSize 		= (object && typeof object.fontSize != "undefined") ? object.fontSize : 20;
		this.fontWeight 	= (object && typeof object.fontWeight != "undefined") ? object.fontWeight : 500;
		this.fontStyle		= (object && typeof object.fontStyle != "undefined") ? object.fontStyle : 'italic';
	// this.textDecorationLine = (object && typeof object.textDecorationLine != "undefined") ? object.textDecorationLine : underline;
		this.fontFamily 	= (object && typeof object.fontFamily != "undefined") ? object.fontFamily : 'Roboto Condensed';
		this.opacity 		= (object && typeof object.opacity != "undefined") ? object.opacity : 1;
		this.id 			= (object && typeof object.id != "undefined") ? object.id : new Date().getTime();
		this.index 			= (object && typeof object.index != "undefined") ? object.index : this.canvas.getObjects().length;
		this.originX 		= (object && typeof object.originX != "undefined") ? object.originX : 'center';
		this.originY 		= (object && typeof object.originY != "undefined") ? object.originY : 'center';
		this.class 			= (object && typeof object.class != "undefined") ? object.class : 'text';
		this.originalObject = null;
		this.width 			= (object && typeof object.width != "undefined") ? object.width : this.getWidth(this);
	}
	create(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox(that.text, {
			id 			: that.id,
			top 		: that.top, // coord x
			left 		: that.left, // coord y
			fill 		: that.fill,
			index		: that.index,
			class		: that.class,
			width		: that.width,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: that.fontSize,
			fontWeight	: that.fontWeight,
			fontStyle	: that.fontStyle,
			// textDecorationLine:that.textDecorationLine,
			fontFamily	: that.fontFamily,
			reference	: that,
		});
		this.originalObject = text;
		if (FabricStore.getSide() === "front")		
		{   debugger;
		   this.canvasFront.add(text).setActiveObject(text).renderAll();
	    }
		else if (FabricStore.getSide() === "back")
		{   debugger;
			this.canvasBack.add(text).setActiveObject(text).renderAll();
		}
	}
    getWidth(object){
		var text = new fabric.IText(object.text, {
            fontSize: object.fontSize,
            textAlign: object.textAlign,
            fontWeight:object.fontWeight,
            fontFamily:object.fontFamily
        });
        return (text.width+5);
	}
}
module.exports = Fabric_Text;