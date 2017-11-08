require('fabric');
import FabricStore from "../../../stores/FabricStore.js";
import Canvas from "../fabric-components/Canvas.js";
class Fabric_Shape {
    constructor(object) {        
        this.canvas			= FabricStore.getCanvas();
		this.type 			= (object && typeof object.type != "undefined") ? object.type : 'rect';
		this.top 			= (object && typeof object.top != "undefined") ? object.top : this.canvas.height/2;
		this.left 			= (object && typeof object.left != "undefined") ? object.left : this.canvas.width/2;
		this.scaleX 		= (object && typeof object.scaleX != "undefined") ? object.scaleX : 1;
		this.scaleY 		= (object && typeof object.scaleY != "undefined") ? object.scaleY : 1;
		this.width 			= (object && typeof object.width != "undefined") ? object.width : 60;
		this.height 		= (object && typeof object.height != "undefined") ? object.height : 60;
		this.angle 			= (object && typeof object.angle != "undefined") ? object.angle : 0;
		this.opacity 		= (object && typeof object.opacity != "undefined") ? object.opacity : 1;
		this.id 			= (object && typeof object.id != "undefined") ? object.id : new Date().getTime();
		this.index 			= (object && typeof object.index != "undefined") ? object.index : this.canvas.getObjects().length;
		this.originX 		= (object && typeof object.originX != "undefined") ? object.originX : 'center';
		this.originY 		= (object && typeof object.originY != "undefined") ? object.originY : 'center';
        this.class 			= (object && typeof object.class != "undefined") ? object.class : 'shape';
        this.backgroundColor= (object && typeof object.backgroundColor != "undefined") ? object.backgroundColor: '#F44336';
        this.stroke 		= (object && typeof object.stroke != "undefined") ? object.stroke : '#F44336';
        this.strokeWidth 	= (object && typeof object.strokeWidth != "undefined") ? object.strokeWidth : 1;
		this.fill           = (object && typeof object.fill != "undefined") ? object.fill: '#F44336';
		this.radius 		= (object && typeof object.radius != "undefined") ? object.radius : 40;
		this.rx				= (object && typeof object.rx != "undefined") ? object.rx : 70;
		this.ry				= (object && typeof object.ry != "undefined") ? object.ry : 25;
		this.originalObject = null;
    }
	createRect(){
		 
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shp = new fabric.Rect({
			id 			     : that.id,
			top 		     : that.top,
			left 		     : that.left,
			fill 		     : that.fill,
			index		     : that.index,
            class		     : that.class,
            height           : that.height,
			width		     : that.width,
			opacity		     : that.opacity,
			originX		     : that.originX,
			originY		     : that.originY,
			type	         : that.type,
			stroke  	     : that.stroke,
            strokeWidth	     : that.strokeWidth,
            backgroundColor  : that.backgroundColor,
			reference	     : that,
		});
		that.originalObject = shp;
		this.canvas.add(shp).setActiveObject(shp).renderAll();
		FabricStore.setActiveObject(shp);
	}
	createLogo(){		
	   this.canvas.deactivateAll().renderAll();
	   var that = this;
	   var shp = new fabric.Rect({
		   id 			     : that.id,
		   top 		    	 : 100,
		   left 		     : 120,
		   fill 		     : '#FAFAFA',
		   index		     : that.index,
		   class		     : that.class,
		   height            : 150,
		   width		     : 150,
		   opacity		     : that.opacity,
		   originX		     : that.originX,
		   originY		     : that.originY,
		   type	         	 : that.type,
		   stroke  	    	 : '#000000',
		   strokeWidth	     : 1,
		   backgroundColor   : '#FAFAFA',
		   reference	     : that,
	   });
	   that.originalObject = shp;
	   this.canvas.add(shp).setActiveObject(shp).renderAll();
	   FabricStore.setActiveObject(shp);
   }
    createLine(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Line([100, 0, 300, 0],{
			id 			     : that.id,
			top 		     : that.top,
			left 		     : that.left,
			fill 		     : that.fill,
			index		     : that.index,
            class		     : that.class,
			originX		     : that.originX,
			opacity		     : that.opacity,
			originY		     : that.originY,			
			type	         : that.type,
			stroke  	     : that.fill,
			strokeWidth	     : that.strokeWidth, 
			height           : that.height,
			width		     : that.width,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
    }
    createCircle(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Circle({
			id 			     : that.id,
			top 		     : that.top,
			left 		     : that.left,
			fill 		     : that.fill,
			index		     : that.index,
            class		     : that.class,
			opacity		     : that.opacity,
			originX		     : that.originX,
			originY		     : that.originY,
			radius			 : that.radius,
			type	         : that.type,
			stroke  	     : that.stroke,
            strokeWidth	     : that.strokeWidth,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
	}
	
	createCircle1(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Circle({
            id 			     : that.id,	
            top 		     : 90, // coord x
			left 		     : 535, // coord y
			fill 		     : '#C70039',
			index		     : that.index,
            class		     : 'shape',
			opacity		     : that.opacity,
			originX		     : that.originX,
			originY		     : that.originY,
			radius			 : 4,
			type	         : that.type,
            strokeWidth	     : that.strokeWidth,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
	}
	
    createCircle2(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Circle({
            id 			     : that.id,	
            top 		     : 120, // coord x
			left 		     : 535, // coord y
			fill 		     : '#FFC300',
			index		     : that.index,
            class		     : 'shape',
			opacity		     : that.opacity,
			originX		     : that.originX,
			originY		     : that.originY,
			radius			 : 4,
			type	         : that.type,
            strokeWidth	     : that.strokeWidth,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
	}
	
	createCircle3(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Circle({
			id 			     : that.id,
			top 	         : 280, // coord x
			left 		     : 535, // coord y
			fill 		     : '#2E86C1',
			index		     : that.index,
            class		     : 'shape',
			opacity		     : that.opacity,
			originX		     : that.originX,
			originY		     : that.originY,
			radius			 : 4,
			type	         : that.type,
            strokeWidth	     : that.strokeWidth,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
	}
    createCircle4(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Circle({
			id 			     : that.id,
			top 		     : 320, // coord x
			left 		     : 535, // coord y
			fill 		     : '#28B463',
			index		     : that.index,
            class		     : 'shape',
			opacity		     : that.opacity,
			originX		     : that.originX,
			originY		     : that.originY,
			radius			 : 4,
			type	         : that.type,
            strokeWidth	     : that.strokeWidth,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
	}
	createEllipse(){
		this.canvas.deactivateAll().renderAll();
		var that = this;
		var shape = new fabric.Ellipse({
			id 			     : that.id,
			top 		     : that.top,
			left 		     : that.left,
			fill 		     : that.fill,
			index		     : that.index,
            class		     : that.class,
            rx          	 : that.rx,
			ry			     : that.ry,
			opacity		     : that.opacity,
			originX		     : that.originX,
			originY		     : that.originY,
			type	         : that.type,
			stroke  	     : that.stroke,
            strokeWidth	     : that.strokeWidth,
			reference	     : that,
		});
		that.originalObject = shape;
		this.canvas.add(shape).setActiveObject(shape).renderAll();
    }
	delete(){
		this.canvas.remove(this.originalObject).renderAll();
	}	
}
module.exports = Fabric_Shape;

// var rec = new fabric.Rect({
//   	top: 10,
//     left: 10,
//     width: 75,
//     height: 100,
//     fill: '',
//     stroke: 'blue',
//     strokeWidth: 2
// });

// var cir = new fabric.Circle({
//   	top: 10,
//     left: 100,
//     radius: 50,
//     fill: '',
//     stroke: 'blue',
//     strokeWidth: 2
// });

// var tri = new fabric.Triangle({
//   	top: 10,
//     left: 200,
//     width: 200, 
//     height: 100,
//     fill: '',
//     stroke: 'blue',
//     strokeWidth: 2
// });

// var eli = new fabric.Ellipse({
//   	top: 150,
//     left: 10,
//    /* Try same values rx, ry => circle */
//     rx: 75,
//     ry: 50,
//     fill: '',
//     stroke: 'blue',
//     strokeWidth: 4
// });

// var trapezoid = [ {x:-100,y:-50},{x:100,y:-50},{x:150,y:50},{x:-150,y:50} ];
// var emerald = [ 	{x:850,y:75},
//                   {x:958,y:137.5},
//                   {x:958,y:262.5},
//                   {x:850,y:325},
//                   {x:742,y:262.5},
//                   {x:742,y:137.5},
//                   ];
// var star4 = [
// 	{x:0,y:0},
//   {x:100,y:50},
//   {x:200,y:0},
//   {x:150,y:100},
//   {x:200,y:200},
//   {x:100,y:150},
//   {x:0,y:200},
//   {x:50,y:100},
//   {x:0,y:0}
// ];
// var star5 = [ 	{x:350,y:75},
//               {x:380,y:160},
//               {x:470,y:160},
//               {x:400,y:215},
//               {x:423,y:301},
//               {x:350,y:250},
//               {x:277,y:301},
//               {x:303,y:215},
//               {x:231,y:161},
//               {x:321,y:161},];
// var shape = new Array(trapezoid,emerald,star4,star5);

// var polyg = new fabric.Polygon(shape[1], {
//     top: 180,
//     left: 200,
//     fill: '',
//     stroke: 'blue',
//     strokeWidth: 2
// });


    // /**
    //  * Returns an object representation of an instance
    //  * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
    //  * @return {Object} Object representation of an instance
    //  */
    // toObject: function(propertiesToInclude) {
    //   var NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS,

        //   object = {
            
        //     originX:                  this.originX,
        //     originY:                  this.originY,
        //     left:                     toFixed(this.left, NUM_FRACTION_DIGITS),
        //     top:                      toFixed(this.top, NUM_FRACTION_DIGITS),
        //     width:                    toFixed(this.width, NUM_FRACTION_DIGITS),
        //     height:                   toFixed(this.height, NUM_FRACTION_DIGITS),
        //     fill:                     (this.fill && this.fill.toObject) ? this.fill.toObject() : this.fill,
        //     stroke:                   (this.stroke && this.stroke.toObject) ? this.stroke.toObject() : this.stroke,
        //     strokeWidth:              toFixed(this.strokeWidth, NUM_FRACTION_DIGITS),
        //     strokeDashArray:          this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
        //     strokeLineCap:            this.strokeLineCap,
        //     strokeLineJoin:           this.strokeLineJoin,
        //     strokeMiterLimit:         toFixed(this.strokeMiterLimit, NUM_FRACTION_DIGITS),
        //     scaleX:                   toFixed(this.scaleX, NUM_FRACTION_DIGITS),
        //     scaleY:                   toFixed(this.scaleY, NUM_FRACTION_DIGITS),
        //     angle:                    toFixed(this.angle, NUM_FRACTION_DIGITS),
        //     flipX:                    this.flipX,
        //     flipY:                    this.flipY,
        //     opacity:                  toFixed(this.opacity, NUM_FRACTION_DIGITS),
        //     shadow:                   (this.shadow && this.shadow.toObject) ? this.shadow.toObject() : this.shadow,
        //     visible:                  this.visible,
        //     clipTo:                   this.clipTo && String(this.clipTo),
        //     backgroundColor:          this.backgroundColor,
        //     fillRule:                 this.fillRule,
        //     globalCompositeOperation: this.globalCompositeOperation,
        //     transformMatrix:          this.transformMatrix ? this.transformMatrix.concat() : null,
        //     skewX:                    toFixed(this.skewX, NUM_FRACTION_DIGITS),
        //     skewY:                    toFixed(this.skewY, NUM_FRACTION_DIGITS)
        //   };

    //   fabric.util.populateWithProperties(this, object, propertiesToInclude);
    //   if (!this.includeDefaultValues) {
    //     object = this._removeDefaultValues(object);
    //   }

    //   return object;
    // },