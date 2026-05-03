import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function GoldOrb() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} castShadow>
        <icosahedronGeometry args={[1.4, 8]} />
        <MeshDistortMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.15}
          distort={0.35}
          speed={1.5}
          envMapIntensity={1.6}
        />
      </mesh>
    </Float>
  );
}

function GlassRing({ radius = 2.4, tube = 0.05, color = "#e8c87a" }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.x = s.clock.elapsedTime * 0.15;
    ref.current.rotation.y = s.clock.elapsedTime * 0.2;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 32, 200]} />
      <meshPhysicalMaterial
        color={color}
        metalness={0.9}
        roughness={0.1}
        transmission={0.4}
        thickness={0.5}
        clearcoat={1}
      />
    </mesh>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 220;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.04;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#d4af37" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export function Scene3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <pointLight position={[-5, -3, -2]} intensity={0.6} color="#d4af37" />
        <GoldOrb />
        <GlassRing radius={2.2} tube={0.04} />
        <GlassRing radius={2.7} tube={0.025} color="#fff2c2" />
        <Particles />
        <Environment preset="night" />
        <ContactShadows position={[0, -2, 0]} opacity={0.4} blur={3} />
      </Suspense>
    </Canvas>
  );
}
