import { useEffect, useState } from "react";
import "./App.css";
import { scene, camera } from "./sphere";
import * as THREE from "three";

function App() {
  useEffect(() => {
    const renderer = new THREE.WebGL1Renderer();
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    const animate = () => {
      requestAnimationFrame(animate);

      // Perform any updates to your scene here if needed.

      renderer.render(scene, camera);
    };

    animate();
  }, []);
  return <div id="scene-container"></div>;
}

export default App;
