import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere } from '@react-three/drei'
import * as THREE from 'three'

// Floating orb
function FloatingOrb({ position, color, scale }) {
  const orbRef = useRef()

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.001
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5} floatingRange={[-0.5, 0.5]}>
      <mesh ref={orbRef} position={position} scale={scale}>
        <Sphere args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>
    </Float>
  )
}

// Scene with floating orbs
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />

      {/* Floating orbs scattered throughout */}
      <FloatingOrb position={[-8, 3, -5]} color="#D4735E" scale={0.8} />
      <FloatingOrb position={[8, -3, -6]} color="#E8907A" scale={0.6} />
      <FloatingOrb position={[-6, -4, -4]} color="#C4B5A0" scale={0.7} />
      <FloatingOrb position={[6, 4, -7]} color="#B09F8F" scale={0.9} />
      <FloatingOrb position={[0, 0, -8]} color="#FAF7F2" scale={0.5} />
      <FloatingOrb position={[-4, 2, -3]} color="#E8DFD0" scale={0.6} />
      <FloatingOrb position={[4, -1, -5]} color="#D4735E" scale={0.7} />
    </>
  )
}

// Main component for ambient floating background
export default function FloatingBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
