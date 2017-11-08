import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class FabricStore extends EventEmitter{
	constructor(){
		super();
		this.canvas = null;
		this.canva = null;
		this.side = null;
		this.activeObject = null;
		this.front = null;
		this.back = null;
		this.color = null;
	}
	getColor(){
		return this.color;
	}
	setColor(color){
		this.color = color;
	}
	getCanvas(){
		return this.canvas;
	}
	setCanvas(canvas){
		this.canvas = canvas;
	}
	getCanvasFront(){
		return this.front;
	}
	setCanvasFront(canvas){
		this.front = canvas;
	}
	getCanvasBack(){
		return this.back;
	}
	setCanvasBack(canvas){
		this.back = canvas;
	}
	getEmptyCanvas(){
		return this.canva;
	}
	setEmptyCanvas(canva){
		this.canva = canva;
	}
	getSide(){
		return this.side;
	}
	setSide(side){
		this.side = side;
	}
	getActiveObject(){
		return this.activeObject;
	}
	setActiveObject(object){
		console.log('ActiveObject updated');
		this.activeObject = object;
		this.emit('change');
	}
	handleActions(action){
		switch(action.type){
			case "updateActiveObject":{
				console.log('active object updated',action.object.class);
				this.setActiveObject(action.object.class);
				break;
			}
			case "setCanvas":{
				console.log('canvas updated',action);
				this.setCanvas(action.object);
				break;
			}
			case "setColor":{
				console.log('Background Color',action);
				this.setCanvas(action.object);
				break;
			}
			case "setCanvasFront":{
				console.log('Front canvas updated',action);
				this.setCanvas(action.object);
				break;
			}
			case "setCanvasBack":{
				console.log('Back canvas updated',action);
				this.setCanvas(action.object);
				break;
			}
			case "setEmptyCanvas":{
				console.log('Empty Canvas Called',action);
				this.setCanvas(action.object);
				break;
			}
			case "setSide":{
				console.log('side updated',action);
				this.setSide(action.object);
				this.setActiveObject(null);
				break;
			}
		}
	}
}

const fabricStore = new FabricStore;
dispatcher.register(fabricStore.handleActions.bind(fabricStore));

export default fabricStore;