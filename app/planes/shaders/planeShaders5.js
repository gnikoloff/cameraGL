let vertShader = `
    uniform float delta;
    uniform sampler2D texture;

    varying vec4 vPos;
    varying vec2 vUv;

    void main () {
        vUv = uv;
        vec4 sampler = texture2D(texture, uv);

        vec4 newPos = vec4(position.xyz, 1.0);
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

    void main() { 
        
        vec2 distort = vUv;
        distort.y = cos(vPos.y + delta / 100.0) * 0.005 + sin(vUv.y);
        distort.x = cos(vPos.x + delta / 100.0) * 0.015 + sin(vUv.x);
        vec4 sampler = texture2D(texture, distort);
        
        gl_FragColor = sampler;
    }
`

export default {
    vertShader,
    fragShader
}