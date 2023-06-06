import "../App.css";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as core from "@theatre/core";
import {getProject} from '@theatre/core';
import { SheetProvider } from "@theatre/r3f";
import {editable as e} from '@theatre/r3f';
import demostate from './state.json';
import { useRef, useEffect } from 'react'; 

export default function Men() {
  const demoSheet = getProject('Demo Project', {state: demostate}).sheet('Demo Sheet');
  const object = useGLTF("./tommy_hilfiger_jacket/scene.gltf").scene;
  const html = document.documentElement;
  const ref = useRef(null);
  const canvas_container_ref = useRef(null);
  useEffect(() => {
    const saection = ref.current;
    const canvas_container = canvas_container_ref.current;
    window.addEventListener("scroll", e => {
      const currentScroll = html.scrollTop;
      const maxScroll = html.scrollHeight - window.innerHeight;
      const timeIndex = currentScroll / maxScroll * 15;
      demoSheet.sequence.position = timeIndex;
      saection.style.opacity = 1;
      if (demoSheet.sequence.position == 0) {
        saection.style.opacity = 1;
        saection.innerHTML = "<div>Scroll to see animation.<br /><div class='button'>Skip animation</div></div>";
      }
      else if (Math.round(demoSheet.sequence.position) == 2) {
        saection.innerText = "Introducing";
        saection.style.opacity = 1;
      } else if (Math.round(demoSheet.sequence.position) == 4) {
        saection.innerText = "Long sleeve made with leather.";
        saection.style.opacity = 1;
      } else if (Math.round(demoSheet.sequence.position) == 6) {
        saection.innerText = "Strongful zipper, stronger than a bull.";
        saection.style.opacity = 1;
      } else if (Math.round(demoSheet.sequence.position) == 8) {
        saection.innerText = "Two bags on the Jacket.";
        saection.style.opacity = 1;
      } else if (Math.round(demoSheet.sequence.position) == 10) {
        saection.innerText = "Neck made out of soft leather.";
        saection.style.opacity = 1;
      } else if (Math.round(demoSheet.sequence.position) == 12) {
        saection.innerText = "All Jackets here are made perfectly like that. Handmade.";
        saection.style.opacity = 1;
      } else if (Math.round(demoSheet.sequence.position) == 14) {
        saection.innerText = "Only at Vouis Le Trouix.";
        saection.style.opacity = 1;
      } else if (Math.round(demoSheet.sequence.position) >= 15) {
        canvas_container.style.position = "absolute";
        saection.style.opacity = 0;
      } else {
        canvas_container.style.position = "fixed";
        saection.style.opacity = 0;
      }
    })
  })
  return (
    <div className="Men">
      <div className="canvas-container" ref={canvas_container_ref}>
        <Canvas>
          <SheetProvider sheet={demoSheet}>
            <e.primitive theatreKey="object" editableType="mesh" object={object} position={[0, -5, 0]} />
            <e.pointLight theatreKey="light" position={[0, 10, 10]} />
          </SheetProvider>
        </Canvas>
      </div>
      <div id="section" ref={ref}><div>Scroll to see animation.<br /><div class='button'>Skip animation</div></div></div>
    </div>
  );
}
