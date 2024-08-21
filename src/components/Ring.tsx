import { Color, MeshProps } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

type RingProps = {
  color: Color;
} & MeshProps;

const Ring = ({ color, ...props }: RingProps) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null!);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => {
  //   meshRef.current.rotation.x += delta;
  // });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <torusGeometry args={[5, 0.5, 16, 100]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Ring;
