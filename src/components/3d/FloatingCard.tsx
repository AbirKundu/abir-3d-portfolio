import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingCardProps {
  position: [number, number, number];
  text: string;
  color: string;
}

function Card({ position, text, color }: FloatingCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group position={position}>
      <Box ref={meshRef} args={[1.5, 0.8, 0.1]}>
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </Box>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}

export const FloatingCard: React.FC<FloatingCardProps & { containerClassName?: string }> = ({ 
  position, 
  text, 
  color, 
  containerClassName = "w-full h-32" 
}) => {
  return (
    <div className={containerClassName}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Card position={position} text={text} color={color} />
      </Canvas>
    </div>
  );
};