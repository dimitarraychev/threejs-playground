import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { addMoon, addRocket, addText } from './elements.js';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.CubeTextureLoader()
    .setPath('images/skybox/').load([
        'front.png',
        'back.png',
        'top.png',
        'bottom.png',
        'left.png',
        'right.png',
    ]);

// Renderer
const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 100, 400);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Lights
const directionalLight = new THREE.DirectionalLight(0xaaaaaa, 25);
directionalLight.position.set(0, 0, 300);
scene.add(directionalLight);

const spotlight = new THREE.SpotLight(0xffffff, 5);
spotlight.decay = 0.1;
spotlight.position.set(500, 150, 50);
scene.add(spotlight);

// Elements
addText(scene);
addMoon(scene);
addRocket(scene);

// Animation
function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();