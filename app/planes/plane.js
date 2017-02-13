const THREE = require('three')

class Plane {
    constructor (title, vertShader, fragShader, pos, size) {
        this.title = title
        this.vertShader = vertShader
        this.fragShader = fragShader
        this.position = pos
        this.size = size
        this.scale = { x: 1, y: 1, z: 1 }
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
            fragmentShader: this.fragShader,
            transparent: true
        })
        this.mesh = new THREE.Mesh(geometry, material)
        let { x, y, z } = this.position
        this.mesh.position.set(x, y, z)
        this.mesh.scale.set(this.scale.x, this.scale.y, this.scale.z)
        scene.add(this.mesh)
        
        return this
    }
    updateFrame (ts ) {
        this.mesh.scale.set(this.scale.x, this.scale.y, this.scale.z)
        this.mesh.material.uniforms.delta.value = ts;
        this.mesh.material.uniforms.texture.value.needsUpdate = true;
    }
}

export default Plane