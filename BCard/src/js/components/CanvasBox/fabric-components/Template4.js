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
		this.angle 			= (object && typeof object.angle != "undefined") ? object.angle : 0;
		this.text 			= (object && typeof object.text != "undefined") ? object.text : 'Insert Your Text Here';
		this.fill 			= (object && typeof object.fill != "undefined") ? object.fill : '#333333';
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
		this.width 			= 150;
    }
    createName(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('Steve Jobs', {
			id 			: that.id,
			top 		: 90, // coord x
			left 		: 450, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 24,
			fontWeight	: that.fontWeight,
            fontFamily	: 'Courier',
            fontWeight	: 'bold',
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
			top 		: 120, // coord x
			left 		: 450, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 18,
			fontStyle	: 'italic',
			fontFamily	: 'Courier',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
    }
    createCompanyWeb(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('www.apple.com' , {
			id 			: that.id,
			top 		: 280, // coord x
			left 		: 440, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 20,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Courier',
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
			top 		: 320, // coord x
			left 		: 406, // coord y
			fill 		: '#000000',
			index		: that.index,
			class		: that.class,
			width		: 150,
			opacity		: that.opacity,
			originX		: that.originX,
			originY		: that.originY,
			fontSize	: 20,
			fontWeight	: that.fontWeight,
			fontFamily	: 'Courier',
			reference	: that,
		});
		that.originalObject = text;
		this.canvas.add(text).setActiveObject(text).renderAll();
		FabricStore.setActiveObject(text);
    }        
	createCompany(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var text = new fabric.Textbox('Apple Inc.' , {
			id 			: that.id,
			top 		: 190, // coord x
			left 		: 140, // coord y
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
        return (text.width + 20);
	}
}
module.exports = Fabric_Text;