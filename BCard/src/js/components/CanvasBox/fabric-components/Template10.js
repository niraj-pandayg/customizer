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
		this.fontFamily 	= (object && typeof object.fontFamily != "undefined") ? object.fontFamily : 'Arial';
		this.opacity 		= (object && typeof object.opacity != "undefined") ? object.opacity : 1;
		this.id 			= (object && typeof object.id != "undefined") ? object.id : new Date().getTime();
		this.index 			= (object && typeof object.index != "undefined") ? object.index : this.canvas.getObjects().length;
		this.originX 		= (object && typeof object.originX != "undefined") ? object.originX : 'center';
		this.originY 		= (object && typeof object.originY != "undefined") ? object.originY : 'center';
		this.class 			= (object && typeof object.class != "undefined") ? object.class : 'text';
		this.originalObject = null;
		this.width 			=  150;
    }
    createCompany(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('Apple Inc.', {
			id 			: that.id,
			top 		: 55, // coord x
			left 		: 290, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 30,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Arial',
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
		var shape = new fabric.Line([250, 0, 0, 0],{
			id 			     : that.id,
			top 		     : 90,
			left 		     : 285,
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
	createName(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('Steve Jobs' , {
			id 			: that.id,
			top 		: 140, // coord x
			left 		: 300, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 26,
			fontWeight	: 'bold',
			fontFamily	: 'Arial',
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
			top 		: 175, // coord x
			left 		: 325, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 20,
			fontStyle	: 'italic',
			fontFamily	: 'Arial',
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
			top 		: 255, // coord x
			left 		: 430, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 20,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Arial',
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
			top 		: 319, // coord x
			left 		: 305, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 20,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Arial',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
	}
	createAddress1(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('123, Mount View', {
			id 			: that.id,
			top 		: 235, // coord x
			left 		: 170, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 18,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Arial',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
	}
	createAddress2(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('CA, USA', {
			id 			: that.id,
			top 		: 270, // coord x
			left 		: 172, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 18,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Arial',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
	}

	createCompanyWeb(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('www.apple.com',  {
			id 			: that.id,
			top 		: 350, // coord x
			left 		: 305, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 20,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Arial',
			fontWeight  : 'bold',
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