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
        vec4 sampler = texture2D(texture, vUv);
        vec4 overlayColor = vec4(
            sin(cos(vPos.y) * 2.0 + cos(vPos.x) + delta / 750.0) * 50.0,  
            sin(cos(vPos.y) * 2.0 + cos(vPos.x) + delta / 500.0) * 50.0, 
            0.5 , 
            1.0
        );
        vec4 outColor = vec4(0.0, 0.0, 0.0, 0.0);
        if (
                (sampler.r > 0.55 && sampler.g > 0.55 && sampler.b > 0.55) ||
                (sampler.r < 0.05 && sampler.g < 0.05 && sampler.b < 0.05)
            ) {
            outColor = mix(sampler, overlayColor, 0.01);
        } else {
            outColor = sampler;
        }
        gl_FragColor = outColor;
    }
`

export default {
    vertShader,
    fragShader
}