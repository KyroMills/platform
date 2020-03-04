let heroStand = new Sprite("images/m_alienBlue_stand.png")
let heroJump = new Sprite("images/m_alienBlue_jump.png")
	class Hero {
	constructor(){
		this.x = GRIDSIZE
		this.y = GRIDSIZE
		this.width = GRIDSIZE	
		this.height = GRIDSIZE * 2

		this.dy = 0
		this.airborne = true
	}
	jump() {
		if (this.airborne){
			return
		}
		this.dy = - GRIDSIZE / 2
		this.airborne = true
	}
	moveLeft() {
		this.x= this.x - GRIDSIZE / 10
	}
	moveRight() {
		this.x = this.x + GRIDSIZE / 10
	}
	step(platforms) {
		this.dy = this.dy + GRIDSIZE / 60
		if (this.dy > GRIDSIZE) {
			this.dy = GRIDSIZE - 1
		}
		this.y = this.y + this.dy

		platforms.forEach(p => {
			let isInsideY = this.y > p.y && this.y< p.y + p.height
			let isInsideX = this.x > p.x && this.x <p.x + p.width
			if (isInsideX && isInsideY) {
				this.y = p.y
				this.dy = 0
				this.airborne = false
			}
	})

		if (this.y > CANVAS.height) {
			this.y = CANVAS.height
			this.airborne = false
		}
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
		let imageToDraw = heroStand
		if (this.airborne) {
			imageToDraw = heroJump
		}
		imageToDraw.draw(
			this.x - this.width / 2,
			this.y - this.height,
			this.width,
			this.height
			)
	}
}              