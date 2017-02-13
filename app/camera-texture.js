import './utils/get-user-media'

class Texture {
    constructor () {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.width = this.canvas.width = 512
        this.height = this.canvas.height = 256
        this.src = document.querySelector('#video')

        //document.body.appendChild(this.canvas)
    }
    render () {
        this.ctx.save()
        this.ctx.drawImage(this.src, 0, 0, this.width, this.height)
        let imageData = this.ctx.getImageData(0, 0, this.width, this.height)
        for (let i = 0; i < imageData.data.length; i += 4) {
            //let r = imageData.data[i]
            //let g = imageData.data[i + 1]
            //let b = imageData.data[i + 2]
            //let brightness = (3*r+4*g+b)>>>3
            //imageData.data[i]     = brightness
            //imageData.data[i + 1] = brightness
            //imageData.data[i + 2] = brightness
        }
        this.ctx.putImageData(imageData, 0, 0)
        this.ctx.restore()
    }
}

export default Texture