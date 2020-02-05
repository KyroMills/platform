
class Shape {
	constructor(x,y,width,height) {
		this.x= x
		this.y= y
		this.width= width
		this.height= height
	}
	draw() {
		CTX.fillStyle = "green"
		CTX.fillRect(
			this.x,
			this.y,
			this.width,
			this.height
			)
	}
}
