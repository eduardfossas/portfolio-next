import { Canvas as R3FCanvas, useFrame } from "@react-three/fiber";
import { View, OrthographicCamera, Preload } from "@react-three/drei";

const Canvas = ({ containerRef }) => {
  return (
    <R3FCanvas
      eventSource={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 71], fov: 45, near: 0.1, far: 100000 }}
    >
      <View.Port />
      {/* <OrthographicCamera makeDefault zoom={7} /> */}
      <Preload all />
    </R3FCanvas>
  );
};

const Canvas2 = ({ containerRef }) => {
  return (
    <R3FCanvas
      eventSource={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 71], fov: 45, near: 0.1, far: 100000 }}
    >
      <View.Port />
      {/* <OrthographicCamera makeDefault zoom={7} /> */}
      <Preload all />
    </R3FCanvas>
  );
};

export { Canvas, Canvas2 };
