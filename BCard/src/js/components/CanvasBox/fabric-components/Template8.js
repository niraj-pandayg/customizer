require('fabric');
import FabricStore from "../../../stores/FabricStore.js";
import Canvas from "../fabric-components/Canvas.js";
class Fabric_Text {
	constructor(object) {
		// this.canvas 		= new Canvas();
		// this.canvas.init();
		// this.fs 		    = FabricStore.getCanvas();
		this.canvas 		= FabricStore.getCanvas();
		this.top 			= (object && typeof object.top != "undefined") ? object.top : this.canvas.height/2;
		this.left 			= (object && typeof object.left != "undefined") ? object.left : this.canvas.width/2;
		this.type 			= (object && typeof object.type != "undefined") ? object.type : 'rect';
		this.stroke 		= (object && typeof object.stroke != "undefined") ? object.stroke : '#000000';
        this.strokeWidth 	= (object && typeof object.strokeWidth != "undefined") ? object.strokeWidth : 2;
		this.angle 			= (object && typeof object.angle != "undefined") ? object.angle : 0;
		this.text 			= (object && typeof object.text != "undefined") ? object.text : 'Insert Your Text Here';
		this.fill 			= (object && typeof object.fill != "undefined") ? object.fill : '#000000';
		this.fontSize 		= (object && typeof object.fontSize != "undefined") ? object.fontSize : 20;
		this.fontWeight 	= (object && typeof object.fontWeight != "undefined") ? object.fontWeight : 500;
		this.fontStyle		= (object && typeof object.fontStyle != "undefined") ? object.fontStyle : 'italic';
		this.fontFamily 	= (object && typeof object.fontFamily != "undefined") ? object.fontFamily : 'Roboto Condensed';
		this.opacity 		= (object && typeof object.opacity != "undefined") ? object.opacity : 1;
		this.id 			= (object && typeof object.id != "undefined") ? object.id : new Date().getTime();
		this.index 			= (object && typeof object.index != "undefined") ? object.index : this.canvas.getObjects().length;
		this.originX 		= (object && typeof object.originX != "undefined") ? object.originX : 'center';
		this.originY 		= (object && typeof object.originY != "undefined") ? object.originY : 'center';
		this.class 			= (object && typeof object.class != "undefined") ? object.class : 'text';
		this.originalObject = null;
		this.width 			=  150;
	}
	createName(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('Steve Jobs' , {
			id 			: that.id,
			top 		: 270, // coord x
			left 		: 125, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 30,
			fontWeight	: 'bold',
			fontFamily	: 'Calibri',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
    }
    
	createLine(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Line([150, 0, 0, 0],{
			id 			     : that.id,
			top 		     : 290,
			left 		     : 125,
			fill 		     : '#000000',
			index		     : that.index,
            class		     : that.class,
			originX		     : that.originX,
			opacity		     : that.opacity,
			originY		     : that.originY,			
			type	         : that.type,
			stroke  	     : '#000000',
			strokeWidth	     : 2, 
			height           : that.height,
			width		     : 150,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
    }
	createTitle(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('CEO' , {
			id 			: that.id,
			top 		: 310, // coord x
			left 		: 160, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 22,
			fontStyle	: 'italic',
			fontFamily	: 'Calibri',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
	}
	createCompany(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('Apple Inc.', {
			id 			: that.id,
			top 		: 100, // coord x
			left 		: 460, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 20,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Calibri',
			fontWeight  : 'bold',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
    }
    
	createMobile(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('1234567890', {
			id 			: that.id,
			top 		: 140, // coord x
			left 		: 460, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 20,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Calibri',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
	}
	createEmail(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('stevejobs@apple.com', {
			id 			: that.id,
			top 		: 180, // coord x
			left 		: 475, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 20,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Calibri',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
	}
	createCompanyWeb(){
        this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('apple.com', {
			id 			: that.id,
			top 		: 220, // coord x
			left 		: 460, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 20,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Calibri',
			fontWeight  : 'bold',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
    }
    createLogoText(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('Your Logo' , {
			id 			: that.id,
			top 		: 100, // coord x
			left 		: 125, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 24,
			fontWeight	: 'bold',
			fontFamily	: 'Courier',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
    }
	delete(){
		this.canvas.remove(this.originalObject).renderAll();
	}
	getWidth(object){
		var text = new fabric.Textbox(object.text, {
            fontSize: object.fontSize,
            textAlign: object.textAlign,
            fontWeight:object.fontWeight,
            fontFamily:object.fontFamily
        });
        return (text.width +20);
	}
}
module.exports = Fabric_Text;