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
        distort.y += sin(delta / 1000.0) * sin(distort.x / 20.0);
        vec4 sampler = texture2D(texture, distort);
        sampler.r = ceil(sampler.r * 255.0 / 64.0) * 64.0 / 256.0;
        sampler.g = ceil(sampler.g * 255.0 / 64.0) * 64.0 / 256.0;
        sampler.b = ceil(sampler.b * 255.0 / 64.0) * 64.0 / 256.0;
        gl_FragColor = sampler;
    }
`

export default {
    vertShader,
    fragShader
}