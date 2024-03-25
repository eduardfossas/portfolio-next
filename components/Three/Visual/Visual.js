import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import { useRef, useMemo, useState } from "react";
import {
  AdditiveBlending,
  BackSide,
  Color,
  DoubleSide,
  MathUtils,
  Object3D,
  Vector3,
} from "three";

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
  const data = Array.from({ length: count }, () => ({
    opacity: MathUtils.randFloat(0, Math.random()),
  }));
  const [click, setClicked] = useState();

  const opacity = useMemo(
    () =>
      Float32Array.from(
        new Array(count).fill().flatMap((_, i) => data[i].opacity)
      ),
    []
  );

  const instances = useMemo(() => {
    const temp = [];

    for (let x = 0; x < count; x += 1) {
      temp.push({
        scale: x,
        rotX: 0,
        rotY: x / 5,
        rotZ: 0,
        dir: MathUtils.randFloat(-0.1, 0.1),
      });
    }

    return temp;
  }, [count]);

  function easeInOutCirc(x) {
    return x < 0.5
      ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
      : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
  }

  let incr = 0;

  useFrame(({ clock }, delta) => {
    const time = clock.getElapsedTime() * 0.5;
    const timing = Math.abs(Math.sin(time * 0.5));
    for (let i = 0; i < count; i++) {
      let { scale, rotX, rotY, rotZ, dir } = instances[i];

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
