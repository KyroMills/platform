class Sprite {
	constructor(url) {
		this.loaded = false
		this.image = new Image()
		this.image.onload = () => {
			this.loaded = true
		};
		this.image.src = url
	}
draw(x,y,width,height){
	if (this.loaded) {
		CTX.drawImage(this.image,x,y,width,height)
		}
	}
}