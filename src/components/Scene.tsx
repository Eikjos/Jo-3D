import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ring from "./Ring";

const Scene = () => {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0, 40] }}
    >
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[0, 0, 0]} decay={0} intensity={Math.PI} />
      <Ring
        position={[-12, 2.5, 0.75]}
        color="#038CD1"
        rotation={[-0.15, 0.35, 0, "XYZ"]}
      />
      <Ring
        position={[0, 2.5, -0.35]}
        color="#010101"
        rotation={[0.2, 0.3, 0, "XYZ"]}
      />
      <Ring
        position={[12, 2.5, 1.5]}
        color="#EF3A58"
        rotation={[0.5, 0.1, 0, "XYZ"]}
      />
      <Ring position={[-6, -2.5, 0]} color="#FDBB39" />
      <Ring
        position={[6, -2.5, -1.25]}
        color="#00AF5B"
        rotation={[0.2, -0.3, 0, "XYZ"]}
      />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Scene;
