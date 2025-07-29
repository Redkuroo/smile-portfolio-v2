"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMemo } from 'react';

function Sun({ onClick }) {
  // Rays: 16 longer, thinner, glowing cylinders
  const rays = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      arr.push(
        <mesh key={i} position={[Math.cos(angle) * 2.1, Math.sin(angle) * 2.1, 0]} rotation={[0, 0, angle]}>
          <cylinderGeometry args={[0.04, 0.04, 1.6, 24]} />
          <meshStandardMaterial color="#FFD700" emissive="#ffef8a" emissiveIntensity={0.7} metalness={0.6} roughness={0.2} />
        </mesh>
      );
    }
    return arr;
  }, []);

  return (
    <group onClick={onClick} style={{ cursor: 'pointer' }}>
      {/* Sun core */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1.5, 48, 48]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFA500" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* Rays */}
      {rays}
    </group>
  );
}

function Moon({ onClick }) {
  return (
    <group onClick={onClick} style={{ cursor: 'pointer' }}>
      {/* Main moon body */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 48, 48]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.3} roughness={0.7} />
      </mesh>
      {/* Crescent cutout */}
      <mesh position={[0.6, 0, 0.2]}>
        <sphereGeometry args={[1.5, 48, 48]} />
        <meshStandardMaterial color="#fdf6ee" />
      </mesh>
    </group>
  );
}

export default function Sun3D({ onClick, mode }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ cursor: 'pointer', width: 220, height: 220 }}>
      <ambientLight intensity={0.9} />
      <pointLight position={[5, 5, 5]} intensity={1.2} />
      {mode === 'light' ? <Sun onClick={onClick} /> : <Moon onClick={onClick} />}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    </Canvas>
  );
} 