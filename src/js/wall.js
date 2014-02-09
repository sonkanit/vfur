VFUR.Wall = function(start, end, height, thickness) {
	this.startPosition = start !== undefined ? start : new THREE.Vector2();
	this.endPosition = end !== undefined ? end : new THREE.Vector2();
	this.height = height || 2.0;
	this.thickness = thickness || 0.2;
}

VFUR.Wall.onMouseDown = function(event) {
	
}

VFUR.Wall.onMouseDrag = function(event) {

}

VFUR.Wall.onMouseUp = function(event) {

}