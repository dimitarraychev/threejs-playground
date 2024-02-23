import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Loading
const loadingManager = new THREE.LoadingManager();
const gltfLoader = new GLTFLoader(loadingManager);
const fontLoader = new FontLoader(loadingManager);

const progressBar = document.getElementById('progress-bar');

loadingManager.onProgress = function(url, loaded, total) {
    progressBar.value = (loaded / total) * 100;
};

const progressBarContainer = document.querySelector('.progress-bar-container');

loadingManager.onLoad = function() {
    progressBarContainer.style.display = 'none';
};

// Text
export function addText(scene) {
    fontLoader.load('fonts/Ubuntu_Bold.json', function (font) {
        const geometrySettings = {
            font: font,
            size: 40,
            height: 5,
            curveSegments: 20,
            bevelEnabled: true,
            bevelThickness: 1,
            bevelSize: 0.5,
            bevelSegments: 20
        }
    
        const textGeometry = new TextGeometry('itcoin', geometrySettings);
        const textMaterial = new THREE.MeshLambertMaterial({ color: 0xFF9900 });
        const textLogo = new THREE.Mesh(textGeometry, textMaterial);
        textLogo.position.set(-60, 3, 0);
    
        scene.add(textLogo);
    });
    
    fontLoader.load('fonts/Bitcoin_Regular.json', function (font) {
        const geometrySettings = {
            font: font,
            size: 60,
            height: 5,
            curveSegments: 20,
            bevelEnabled: true,
            bevelThickness: 1,
            bevelSize: 0.5,
            bevelSegments: 20
        }
    
        const textGeometry = new TextGeometry('P', geometrySettings);
        const textMaterial = new THREE.MeshLambertMaterial({ color: 0xFF9900 });
        const textLogo = new THREE.Mesh(textGeometry, textMaterial);
        textLogo.position.set(-105, -4, 0);
    
        scene.add(textLogo);
    });
}

// Moon
export function addMoon(scene) {
    gltfLoader.load('/images/moon-gagarin-crater/scene.gltf', function (gltf) {
        const moon = gltf.scene.children[0];
        moon.scale.set(0.03, 0.03, 0.03);
        moon.position.set(0, -3, 0);
    
        scene.add(gltf.scene);
    });
}

// Rocket
export function addRocket(scene) {
    gltfLoader.load('/images/rocket-scene/scene.gltf', function (gltf) {
        const rocket = gltf.scene.children[0];
        rocket.scale.set(0.15, 0.15, 0.15);
        rocket.position.set(30, -10, -60);
    
        scene.add(gltf.scene);
    });
}