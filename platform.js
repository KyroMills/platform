console.log("loaded platform.js!")
class Platform{
	constructor(x, y, width, height) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
	}

	draw() {
		CTX.fillStyle = 'black'
		CTX.fillRect(this.x, this.y, this.width, this.height)
	}
}