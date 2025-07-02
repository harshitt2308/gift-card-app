import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float, useGLTF } from '@react-three/drei';

function GiftModel() {
  const { scene } = useGLTF(import.meta.env.BASE_URL + 'models/gift.glb');
  return <primitive object={scene} scale={1.2} />;
}

export default function CustomGiftModel() {
  return (
    <div className="h-[450px] w-full max-w-4xl mx-auto my-12">
      <Canvas camera={{ position: [2, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 6]} intensity={1} />
        <Float floatIntensity={1.5} rotationIntensity={1}>
          <Stage environment="city" intensity={0.3}>
            <GiftModel />
          </Stage>
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
