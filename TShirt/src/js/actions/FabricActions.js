import dispatcher from "../dispatcher";

export function setActiveObject(object){
	console.log('Dispatcher Called');
	dispatcher.dispatch({
		type:"updateActiveObject",
		object:object
	})
}

export function setCanvas(object){
	console.log('Dispatcher Called');
	dispatcher.dispatch({
		type:"setCanvas",
		object:object
	})
}
export function setCanvasFront(object){
	console.log('Dispatcher Called');
	dispatcher.dispatch({
		type:"setCanvasFront",
		object:object
	})
}
export function setCanvasBack(object){
	console.log('Dispatcher Called');
	dispatcher.dispatch({
		type:"setCanvasBack",
		object:object
	})
}
export function setEmptyCanvas(object){
	console.log('Dispatcher Called');
	dispatcher.dispatch({
		type:"setEmptyCanvas",
		object:object
	})
}

export function setSide(object){
	console.log('Dispatcher Called');
	dispatcher.dispatch({
		type:"setSide",
		object:object
	})
}
export function setColor(object){
	console.log('Dispatcher Called');
	dispatcher.dispatch({
		type:"setColor",
		object:object
	})
}