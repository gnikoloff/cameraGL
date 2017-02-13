let vertShader = `
    uniform float delta;
    uniform sampler2D texture;

    varying vec4 vPos;
    varying vec2 vUv;
    varying float z;

    void main () {
        vUv = uv;
        vec4 sampler = texture2D(texture, uv);
        vec4 newPos = vec4(position, 1.0);
        z = ((sampler.r + sampler.g + sampler.b) / 3.0) * 5.0;
        vec4 modelViewPosition = modelViewMatrix * newPos;
        vPos = projectionMatrix * modelViewPosition;
        gl_Position = vPos;
    }
`

let fragShader = `
    uniform float delta;
    uniform sampler2D texture;

    varying vec4 vPos;
    varying vec2 vUv;
    varying float z;

    void main() { 
        
        vec4 sampler = texture2D(texture, vUv);
        sampler.r = sin(z) * 0.5;
        sampler.z = sin(z) * 0.8;
        gl_FragColor = sampler;
    }
`

export default {
    vertShader,
    fragShader
}