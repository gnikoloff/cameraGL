const THREE = require('three')
import Plane from './plane'
import TweenMax from 'gsap'

import shadersPlane1 from './shaders/planeShaders1'
import shadersPlane2 from './shaders/planeShaders2'
import shadersPlane3 from './shaders/planeShaders3'
import shadersPlane4 from './shaders/planeShaders4'
import shadersPlane5 from './shaders/planeShaders5'
import shadersPlane6 from './shaders/planeShaders6'
import shadersPlane7 from './shaders/planeShaders7'
import shadersPlane8 from './shaders/planeShaders8'
import shadersPlane9 from './shaders/planeShaders9'

let shaders = [ shadersPlane1, shadersPlane2, shadersPlane3, shadersPlane4, shadersPlane5, shadersPlane6, shadersPlane7, shadersPlane8, shadersPlane9 ]
let planes = []
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

const init = (scene, camera, width, height, texture) => {
    scene = scene
    camera = camera

    let positions = [
        new THREE.Vector3(-width / 3, height / 3, 0),
        new THREE.Vector3(0, height / 3, 0),
        new THREE.Vector3(width / 3, height / 3, 0),
        new THREE.Vector3(-width / 3, 0, 0),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(width / 3, 0, 0),
        new THREE.Vector3(-width / 3, -height / 3, 0),
        new THREE.Vector3(0, -height / 3, 0),
        new THREE.Vector3(width / 3, -height / 3, 0)
    ]

    for (let i = 0; i < shaders.length; i += 1) {
        planes.push(
            new Plane(
                'Lorem Ipsum',
                shaders[i].vertShader,
                shaders[i].fragShader,
                positions[i],                
                {
                    width: width / 3,
                    height: height / 3
                }
            ).init(scene, new THREE.Texture(texture.canvas))
        )
    }

    const mouseDown = (e) => {
        e.preventDefault()
        mouse.x =   ( e.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( e.clientY / (window.innerHeight - 76) ) * 2 + 1;

        raycaster.setFromCamera( mouse, camera )
        let intersects = raycaster.intersectObjects( scene.children )
        let intersected;
        if (intersects.length > 0) {
            intersected = intersects[0].object
            let { x, y, z } = camera.position
            TweenMax.to(intersected.position, 0.25, {
                x, y, z: z - 30.5, ease: Power3.easeOut
            })
        }
    }

    window.addEventListener('mousedown', mouseDown, false)
}

const updateFrame = (ts) => {
    planes.forEach((plane, i) => {
        plane.updateFrame(ts)
    })
    
}

export default {
    init,
    updateFrame
}