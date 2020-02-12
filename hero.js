
let heroSprite = new Sprite("jumpman.png")

class Hero {
	constructor(){
		this.x = 100
		this.y = 100
		this.width = 100
		this.height = 100
	}
	moveUp() {
		this.y=this.y -20
	}
	moveDown() {
		this.y=this.y +20
	}
	moveLeft() {
		this.x= this.x -20
	}
	moveRight() {
		this.x = this.x + 20
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
		heroSprite.draw(this.x,this.y,this.width,this.height)
	}
}              