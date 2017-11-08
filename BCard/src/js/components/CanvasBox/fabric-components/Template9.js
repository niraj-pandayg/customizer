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
	createLineLeft(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Line([0, 106, 0, 0],{
			id 			     : that.id,
			top 		     : 201,
			left 		     : 41,
			fill 		     : '#000000',
			index		     : that.index,
            class		     : that.class,
			originX		     : that.originX,
			opacity		     : that.opacity,
			originY		     : that.originY,			
			type	         : that.type,
			stroke  	     : '#000000',
			strokeWidth	     : 1, 
			height           : that.height,
			width		     : 108,
			scaleX			 : 3,
			scaleY			 : 3,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
    }
    
	createLineRight(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Line([0, 106, 0, 0],{
			id 			     : that.id,
			top 		     : 202,
			left 		     : 563,
			fill 		     : '#000000',
			index		     : that.index,
            class		     : that.class,
			originX		     : that.originX,
			opacity		     : that.opacity,
			originY		     : that.originY,			
			type	         : that.type,
			stroke  	     : '#000000',
			strokeWidth	     : 1, 
			height           : that.height,
			width		     : 108,
			scaleX			 : 3,
			scaleY			 : 3,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
    }
    
	createLineTop(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Line([175, 0, 0, 0],{
			id 			     : that.id,
			top 		     : 42,
			left 		     : 302,
			fill 		     : '#000000',
			index		     : that.index,
            class		     : that.class,
			originX		     : that.originX,
			opacity		     : that.opacity,
			originY		     : that.originY,			
			type	         : that.type,
			stroke  	     : '#000000',
			strokeWidth	     : 1, 
			height           : that.height,
			width		     : 190,
			scaleX			 : 3,
			scaleY			 : 3,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
    }
    
	createLineBottom(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Line([175, 0, 0, 0],{
			id 			     : that.id,
			top 		     : 360,
			left 		     : 302,
			fill 		     : '#000000',
			index		     : that.index,
            class		     : that.class,
			originX		     : that.originX,
			opacity		     : that.opacity,
			originY		     : that.originY,			
			type	         : that.type,
			stroke  	     : '#000000',
			strokeWidth	     : 1, 
			height           : that.height,
			width		     : 190,
			scaleX			 : 3,
			scaleY			 : 3,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
    }
    
	createCompany(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('Apple Inc.', {
			id 			: that.id,
			top 		: 130, // coord x
			left 		: 305, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 30,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Calibri',
			fontWeight  : 'bold',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
    }
	createLine(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Line([180, 0, 0, 0],{
			id 			     : that.id,
			top 		     : 175,
			left 		     : 290,
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
			width		     : 180,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
    }
    
	createName(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('Steve Jobs' , {
			id 			: that.id,
			top 		: 200, // coord x
			left 		: 309, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 22,
			fontWeight	: 'bold',
			fontFamily	: 'Calibri',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
    }
	createTitle(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('CEO' , {
			id 			: that.id,
			top 		: 235, // coord x
			left 		: 335, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 20,
			fontStyle	: 'italic',
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
			top 		: 265, // coord x
			left 		: 288, // coord y
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