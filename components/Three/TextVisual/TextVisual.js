/* eslint-disable */

import {
  Text,
  PerspectiveCamera,
  RenderTexture,
  shaderMaterial,
} from "@react-three/drei";
import { useThree, extend, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { resolveLygia } from "resolve-lygia";
import { useRef } from "react";
import useMatchMedia from "hooks/useMatchMedia";

const TextVisual = () => {
  const viewport = useThree((state) => state.viewport);
  const mesh = useRef(null);
  const isMobile = useMatchMedia("(max-width: 1024px)");
  const fontProps = {
    font: "./Inter-Bold.woff",
    letterSpacing: -0.05,
    maxWidth: 10,
    lineHeight: 1,
    fontSize: 2.5,
    color: "#ef4444",
  };
  const scale = isMobile ? 1 : 1.5;

  const PlateMat = shaderMaterial(
    { uColor: new Vector3(), uTexture: null, uTime: null },
    /*glsl*/ `
      varying vec2 vUv;
      attribute float direction;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    resolveLygia(/*glsl*/ `
      uniform vec3 color;
      varying vec2 vUv;
      uniform float uTime;
      uniform sampler2D uTexture;
  
      #include "lygia/generative/fbm.glsl"
  
      void main() {
        float d2 = fbm(vec2(vUv + uTime)) * 0.15;
        vec2 newUV = vec2(vUv.x + d2, vUv.y + d2);
        vec4 c = texture2D(uTexture, newUV);
        gl_FragColor.rgba = vec4(c);
        #include <colorspace_fragment>
      }
    `)
  );

  extend({ PlateMat });

  useFrame(({ clock }) => {
    if (!mesh) return;
    // mesh.current.position.x = Math.sin(clock.getElapsedTime()) * 0.01;
    mesh.current.material.uniforms.uTime.value = clock.getElapsedTime() * 0.1;
  });

  return (
    <mesh ref={mesh} scale={[viewport.width, viewport.height * scale, 1]}>
      <planeGeometry />
      <plateMat toneMapped={false} key={PlateMat.key}>
        <RenderTexture attach="uTexture">
          <PerspectiveCamera makeDefault manual position={[0, 0, 9]} />

          <Text
            {...fontProps}
            position={[1.2, -0.3, 0]}
            rotation={[0, 0, 0]}
            lineHeight={0.8}
          >
            HELLO HELLO HELLO HELLO
          </Text>

          <mesh>
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial toneMapped={false} />
          </mesh>
        </RenderTexture>
      </plateMat>
    </mesh>
  );
};

export { TextVisual };
