import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stage, Box } from '@react-three/drei';

export default function FloatingGift() {
  return (
    <div className="h-[400px] w-full max-w-4xl mx-auto my-12">
      <Canvas camera={{ position: [2, 2, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 5]} intensity={1} />

        <Float floatIntensity={2} rotationIntensity={2}>
          <Stage environment="city" intensity={0.3}>
            <Box args={[1, 1, 1]}>
              <meshStandardMaterial color="#a855f7" metalness={0.6} roughness={0.3} />
            </Box>
          </Stage>
        </Float>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
