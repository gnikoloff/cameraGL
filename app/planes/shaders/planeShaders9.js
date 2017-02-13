let vertShader = `
    uniform float delta;
    uniform sampler2D texture;

    varying vec4 vPos;
    varying vec2 vUv;

    void main () {
        vUv = uv;
        vec4 sampler = texture2D(texture, vUv);

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

    const float sqrt3 = 1.72;
    const float halfSqrt3 = 0.86;
    float size = 0.05;
    vec2 base = vec2(0.5,0.5);

    void main() { 
      
        vec2 grid = vec2(size,sqrt3*size);
        
        vec2 pnt1 = floor((vUv-base)/grid+0.5);
        pnt1 = pnt1 * grid + base - vUv;

        float dst1 = pnt1.x*pnt1.x + pnt1.y*pnt1.y;

        vec2 base2 = base + size * vec2(0.5,halfSqrt3);

        vec2 pnt2 = floor((vUv-base2)/grid+0.5);
        pnt2 = pnt2*grid +base2 -vUv;

        float dst2 = pnt2.x*pnt2.x + pnt2.y*pnt2.y;

        pnt1= (dst1<dst2) ? pnt1 : pnt2;
        gl_FragColor = vec4(texture2D( texture, pnt1+vUv ));
    }
`

export default {
    vertShader,
    fragShader
}