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
        vec2 uv = vUv.st-0.5;
        float angle = atan(uv.y, uv.x);
        float radius = length(uv);
        angle += radius * (sin(delta / 2000.0) * 3.5);
        vec2 shifted = radius * vec2(cos(angle), sin(angle));
        gl_FragColor = texture2D(texture, (shifted+0.5));
    }
`

export default {
    vertShader,
    fragShader
}