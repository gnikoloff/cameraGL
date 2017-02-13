let vertShader = `
    uniform float delta;
    uniform sampler2D texture;

    varying vec4 vPos;
    varying vec2 vUv;
    varying float z;

    void main () {
        vUv = uv;
        vec4 sampler = texture2D(texture, uv);

        vec4 newPos = vec4(position.xyz, 1.0);
        z = (sampler.g + sampler.b) * 30.0;
        vec4 modelViewPosition = modelViewMatrix * newPos;
        vPos = projectionMatrix * modelViewPosition;
        gl_Position = vPos;
    }
`

let fragShader = `
    uniform sampler2D texture;

    varying vec4 vPos;
    varying vec2 vUv;
    varying float z;

    void main() { 
        vec4 texColor = texture2D(texture, vUv);
        texColor.r = sin(z) * 0.2;
        texColor.g = sin(z) * 0.8;
        gl_FragColor = texColor;
    }
`

export default {
    vertShader,
    fragShader
}