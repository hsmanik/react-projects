import * as THREE from "three";

const scene = new THREE.Scene();

// sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff00",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// lights
const light = new THREE.PointLight(0xffffff, 1, 100);
camera.position.z = 20;
scene.add(light);

// camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600);
camera.position.z = 20;
scene.add(camera);

// renderer

/* const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGL1Renderer({ canvas });
renderer.setSize(800, 600);
renderer.render(scene, camera); */

export { scene, camera };
