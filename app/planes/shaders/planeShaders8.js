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

    float eps = 0.007;

    void main () {
        vec3 t   = texture2D(texture, vUv).rgb;
        vec3 t00 = texture2D(texture, vUv+vec2(-eps,-eps)).rgb;
        vec3 t10 = texture2D(texture, vUv+vec2( eps,-eps)).rgb;
        vec3 t01 = texture2D(texture, vUv+vec2(-eps, eps)).rgb;
        vec3 t11 = texture2D(texture, vUv+vec2( eps, eps)).rgb;
        vec3 tm = (t00+t01+t10+t11)/4.;
        vec3 v=t; vec3 c;
        //t = .5+.5*sin(vec4(100.,76.43,23.75,1.)*t);
        t = t-tm;
        //t = 1.-t;
        t = t*t*t;
        //t = 1.-t;
        v=t;
        v = 10000.*t;

        float g = (tm.x-.3)*5.;
        //g = (g-.5); g = g*g*g/2.-.5; 
        vec3 col0 = vec3(0.,0.,0.);
        vec3 col1 = vec3(.2,.5,1.);
        vec3 col2 = vec3(1.,.8,.7);
        vec3 col3 = vec3(1.,1.,1.);
        if      (g > 2.) c = mix(col2,col3,g-2.);
        else if (g > 1.) c = mix(col1,col2,g-1.);
        else             c = mix(col0,col1,g / 10.0);
            
        c = clamp(c,0.,1.);
        v = clamp(v,0.,1.);
        v = c*(1.-v);
        v = clamp(v,0.,1.);
        if (v==col0) v=col3;
        gl_FragColor = vec4(v,1.0);
    }
`

export default {
    vertShader,
    fragShader
}