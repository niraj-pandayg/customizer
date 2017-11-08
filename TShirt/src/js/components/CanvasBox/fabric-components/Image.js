require('fabric');
import FabricStore from "../../../stores/FabricStore.js";
class Fabric_Image {
	constructor(object,canvas) {
		this.canvas			= FabricStore.getCanvas();
		this.top 			= (object && typeof object.top != "undefined") ? object.top : this.canvas.height/2;
		this.left 			= (object && typeof object.left != "undefined") ? object.left : this.canvas.width/2;
		this.scaleX 		= (object && typeof object.scaleX != "undefined") ? object.scaleX : 1;
		this.scaleY 		= (object && typeof object.scaleY != "undefined") ? object.scaleY : 1;
		this.width 			= (object && typeof object.width != "undefined") ? object.width : 200;
		this.height 		= (object && typeof object.height != "undefined") ? object.height : 200;
		this.angle 			= (object && typeof object.angle != "undefined") ? object.angle : 0;
		this.src 			= (object && typeof object.src != "undefined") ? object.src : '';
		this.opacity 		= (object && typeof object.opacity != "undefined") ? object.opacity : 1;
		this.id 			= (object && typeof object.id != "undefined") ? object.id : new Date().getTime();
		this.index 			= (object && typeof object.index != "undefined") ? object.index : this.canvas.getObjects().length;
		this.originX 		= (object && typeof object.originX != "undefined") ? object.originX : 'center';
		this.originY 		= (object && typeof object.originY != "undefined") ? object.originY : 'center';
		this.class 			= (object && typeof object.class != "undefined") ? object.class : 'image';
		this.originalObject = null;
	}
	create(){
		debugger;
		var that = this;
		this.canvas.deactivateAll().renderAll();
		var ImageObj = new Image();
		ImageObj.onload = function() {
			var img = new fabric.Image(ImageObj);
			img.set({
				id 			: that.id,
				src 		: that.src,
				top 		: that.top,
				left 		: that.left,
				class 		: that.class,
				index 		: that.index,
				width		: that.width,
				height		: that.height,
				scaleX 		: that.scaleX,
				scaleY 		: that.scaleY,
				opacity 	: that.opacity,
				originX 	: that.originX,
				originY 	: that.originY,
				reference	: that
			});
			that.originalObject = img;
			that.canvas.add(img).setActiveObject(img).renderAll();
			FabricStore.setActiveObject(img);
		}
		ImageObj.crossOrigin = "Anonymous";
		ImageObj.src = this.src;
	}
	
	addLogo(){
		debugger;
		var src='http://spartanhvac.com/wp-content/uploads/2015/08/AppleLogo-e1444246106745.jpg';
		var that = this;
		var ImageObj = new Image();
		this.canvas.deactivateAll().renderAll();
		ImageObj.onload = function() {
		fabric.Image.fromURL(src, function(image){
			that.canvas.add(image.set({
				id 			: that.id,
				top 		: that.top,
				left 		: that.left,
				class 		: that.class,
				index 		: that.index,
				width		: that.width,
				height		: that.height,
				scaleX 		: that.scaleX,
				scaleY 		: that.scaleY,
				opacity 	: that.opacity,
				originX 	: that.originX,
				originY 	: that.originY,
				reference	: that
			  }));setActiveObject(image).renderAll();
		  });}
		  ImageObj.crossOrigin = "Anonymous";
		  ImageObj.src = src;
	}  
	
	delete(){
		this.canvas.remove(this.originalObject).renderAll();
	}
}
module.exports = Fabric_Image;