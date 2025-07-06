import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const FloatingLeaves: React.FC = () => {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <planeGeometry args={[0.3, 0.2]} />
      <meshStandardMaterial color="#9ca378" transparent opacity={0.6} />
    </mesh>
  );
};

const NatureBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <Stars radius={100} depth={50} count={2000} factor={2} saturation={0} fade />
          <FloatingLeaves />
        </Canvas>
      </div>

      {/* Animated Birds */}
      <div className="absolute inset-0 z-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bird opacity-30"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 5}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          >
            <svg width="20" height="12" viewBox="0 0 20 12" className="text-brown-600">
              <path
                d="M2 6c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4zm8 0c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Floating Leaves */}
      <div className="absolute inset-0 z-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-leaf opacity-40"
            style={{
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${12 + i * 2}s`,
            }}
          >
            <svg width="16" height="20" viewBox="0 0 16 20" className="text-sage-500">
              <path
                d="M8 0C4 0 0 4 0 8s4 8 8 8c0-4 0-8 0-12 0-2 2-4 4-4s4 2 4 4c0 4 0 8 0 12 4 0 8-4 8-8s-4-8-8-8z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Drifting Clouds */}
      <div className="absolute inset-0 z-5">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-cloud opacity-20"
            style={{
              top: `${5 + i * 10}%`,
              animationDelay: `${i * 8}s`,
              animationDuration: `${30 + i * 5}s`,
            }}
          >
            <svg width="80" height="40" viewBox="0 0 80 40" className="text-vintage-300">
              <ellipse cx="20" cy="25" rx="15" ry="10" fill="currentColor" />
              <ellipse cx="35" cy="20" rx="20" ry="12" fill="currentColor" />
              <ellipse cx="55" cy="25" rx="18" ry="10" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-vintage-50/80 via-transparent to-brown-100/60 z-20" />
    </div>
  );
};

export default NatureBackground;