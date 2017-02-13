const THREE = require('three')
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
    camera.position.set(0, 0, 92)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    renderer.setSize(width, height)
    renderer.setClearColor(0x111111)
    document.body.querySelector('#canvas-container').appendChild(renderer.domElement)
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