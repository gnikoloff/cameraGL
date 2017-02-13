const THREE = require('three')
import PlaneBase from '../plane-base'

const vertShader = `
    uniform float delta;
    uniform sampler2D texture;

    varying vec4 vPos;
    varying vec2 vUv;

    void main () {
        vUv = uv;
        vec4 sampler = texture2D(texture, uv);

        vec4 modelViewPosition = modelViewMatrix * position;
        vPos = projectionMatrix * modelViewPosition;
        gl_Position = vPos;
    }
` 

const fragShader = `
    uniform float delta;
    uniform sampler2D texture;

    varying vec4 vPos;  
    varying vec2 vUv;

    void main() { 
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
    }
`

const init = (width, height) => {
    const position = new THREE.Vector3(-width / 3, -height / 3, 0)
    const size = {
        width: width / 3,
        height: height / 3
    }

    new PlaneBase(
        'Lorem ipsum',
        vertShader,
        fragShader,
        position,
        size
    )
}

export default {
    init
}