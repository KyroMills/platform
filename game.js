
window.addEventListener("keydown", event => {
	let colorIndex = Math.random()
	let color = "red"
	
	if (colorIndex < 0.3) {
		color = "blue"
	}
	if (colorIndex < 0.4 && colorIndex > 0.3) {
		color = "green"
	}
	if (colorIndex < 0.5 && colorIndex > 0.4) {
		color = "orange"
	}
	ctx.fillStyle = color
	let x = Math.random() * canvas.width
	let y = Math.random() * canvas.height
	let height = Math.random() * 500
	let width = Math.random() * 500
	new Shape(x,y,width,height).draw()
})