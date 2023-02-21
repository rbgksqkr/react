import Header from "../src/components/common/header/Header";
import Navbar from "../src/components/common/navbar/Navbar";
import Center from "../src/components/common/header/Center";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function CoinMesh() {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.1));
  return (
    <mesh ref={mesh} scale={2} position={[3, 0, 0]}>
      <cylinderBufferGeometry color="red" args={[1, 1, 0.3, 50]} />
      <meshLambertMaterial attach="material" />
    </mesh>
  );
}

const CenterPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Center position={[-3, 0, 0]} />
        <CoinMesh />
      </Canvas>
      {/* <Center /> */}
    </div>
  );
};
export default CenterPage;
