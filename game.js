let hero = new Hero()
let keyPressed = {}
ERASE()
hero.draw()

window.addEventListener("keydown", event => {
	keyPressed[event.code] = true
})
window.addEventListener("keyup", event => {
	keyPressed[event.code] = false
})

function loop(){
if (keyPressed["ArrowRight"]){
	hero.moveRight()
}
if (keyPressed["ArrowLeft"]){
	hero.moveLeft()
}
if (keyPressed["ArrowUp"]){
	hero.moveUp()
}
if (keyPressed["ArrowDown"]){
	hero.moveDown()
}

ERASE()
hero.draw()
setTimeout(loop, 1000 / 60)
}
loop()
