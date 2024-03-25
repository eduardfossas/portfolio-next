/* eslint-disable */
import { shaderMaterial } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import { useRef, useMemo, useState } from "react";
import { BackSide, MathUtils, Object3D, Vector3 } from "three";

const DUMMY = new Object3D();

const PlateMat = shaderMaterial(
  { uColor: new Vector3() },
  /*glsl*/ `
  varying float vOpacity;
  attribute float opacity;

  void main() {
    vOpacity = opacity;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    }`,
  /*glsl*/ `
  uniform vec3 uColor;
  varying float vOpacity;
  void main() { 
    gl_FragColor = vec4(vec3(uColor), 0.1);
    }`
);

extend({ PlateMat });

const Visual = ({ count = 20, color = new Vector3(0, 0, 0) }) => {
  const mesh = useRef();

  const instances = useMemo(() => {
    const temp = [];

    for (let x = 0; x < count; x += 1) {
      temp.push({
        scale: x,
      });
    }

    return temp;
  }, [count]);

  useFrame(({ clock }, delta) => {
    const time = clock.getElapsedTime() * 0.5;
    for (let i = 0; i < count; i++) {
      let { scale } = instances[i];

      DUMMY.position.set(0, 0, 0);
      DUMMY.rotation.set(
        i * Math.sin(time) * 0.05,
        i * Math.cos(time) * 0.1,
        i * Math.sin(time) * 0.05
      );
      DUMMY.scale.set(scale, scale, scale);
      DUMMY.updateMatrix();
      mesh.current?.setMatrixAt(i, DUMMY.matrix);
    }

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <group scale={0.1}>
        <instancedMesh
          position={[0, 0, 0]}
          ref={mesh}
          args={[undefined, undefined, count]}
        >
          <boxGeometry args={[50, 50, 50]} />
          <meshBasicMaterial
            transparent
            color={"#4f46e5"}
            opacity={0.1}
            depthWrite={false}
            side={BackSide}
          />
        </instancedMesh>
      </group>
    </>
  );
};

export { Visual };
