const THREE = require('three')

class Plane {
    constructor (title, vertShader, fragShader, pos, size) {
        this.title = title
        this.vertShader = vertShader
        this.fragShader = fragShader
        this.position = pos
        this.size = size
        this.mesh = null
    }
    init (scene, texture) {
        let geometry = new THREE.PlaneGeometry(this.size.width, this.size.height, 20, 20)
        let material = new THREE.ShaderMaterial({
            uniforms: {
                delta: { type: 'f', value: 0.0 },
                texture: { type: 't', value: texture }
            },
            vertexShader:   this.vertShader, 
            fragmentShader: this.fragShader
        })
        this.mesh = new THREE.Mesh(geometry, material)
        let { x, y, z } = this.position
        this.mesh.position.set(x, y, z)
        scene.add(this.mesh)
        
        return this
    }
    updateFrame (ts ) {
        
        this.mesh.material.uniforms.delta.value = ts;
        this.mesh.material.uniforms.texture.value.needsUpdate = true;
    }
}

export default Plane