const THREE = require('three')
import TweenMax from 'gsap'
import Events from 'backbone-events-standalone'

import PlaneContainer from './planes/plane-container'
import Texture from './camera-texture'

let width = window.innerWidth
let height = window.innerHeight - 72

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()

let texture = new Texture()
PlaneContainer.init(scene, camera, width / 12, height / 12, texture)

const setScene = () => {
    camera.position.set(0, 0, 1100)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    renderer.setSize(width, height)
    renderer.setClearColor(0x111111)
    document.body.querySelector('#canvas-container').appendChild(renderer.domElement)

    document.querySelector('#loaded').style.display = 'block'
    document.querySelector('#loading').style.display = 'none'
    TweenMax.to('header', 0.25, { y: '0' })
    Events.on('video-access-granted', () => {
        TweenMax.to(camera.position, 0.5, { z: 92, ease: Power2.easeIn })    
    })
}

const renderFrame = (ts) => {
    window.requestAnimationFrame(renderFrame)
    renderer.render(scene, camera)
    texture.render()
    camera.lookAt(scene.position)
    camera.updateMatrixWorld()
    PlaneContainer.updateFrame(ts)
}

const init = () => {
    setScene()
    renderFrame()
}

export default {
    init
}