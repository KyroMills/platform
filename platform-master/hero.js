
class Hero {
	constructor(){
		this.x = 100
		this.y = 100
		this.width = 100
		this.height = 100

	}
	moveRight(){
		this.x = this.x + 10
	}
	draw(){
		CTX.fillStyle = 'black'
		CTX.beginPath()
		CTX.arc(
			this.x,
			this.y,
			this.width,
			0,
			2 * Math.PI,
		)
		CTX.fill()
	}
}              