/* eslint-disable */

import {
  Text,
  PerspectiveCamera,
  RenderTexture,
  shaderMaterial,
} from "@react-three/drei";
import { useThree, extend, useFrame } from "@react-three/fiber";
import { Color, Vector3 } from "three";
import { resolveLygia } from "resolve-lygia";
import { useRef } from "react";
import useMatchMedia from "hooks/useMatchMedia";

const PlateMat = shaderMaterial(
  { uColor: new Color(null), uTexture: null, uTime: null },
  /*glsl*/ `
      varying vec2 vUv;
      attribute float direction;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  `   uniform vec3 uColor;
        varying vec2 vUv;

      void main() {
        vec2 center = vec2(0.5);
        float opacity = distance(center, vUv);
        gl_FragColor.rgba = vec4(uColor, opacity + 0.25);
        #include <colorspace_fragment>
      }
    `
);

extend({ PlateMat });

const SphereVisual = () => {
  const mesh = useRef(null);

  return (
    <mesh position={[0, 0, 0]} ref={mesh}>
      <circleGeometry args={[20, 64, 64]} />
      <plateMat uColor="#ef4444" key={PlateMat.key} wireframe />
    </mesh>
  );
};

export { SphereVisual };
