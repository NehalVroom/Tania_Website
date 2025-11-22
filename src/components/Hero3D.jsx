import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from '@react-three/drei'
import * as THREE from 'three'

// Floating geometric shape component
function FloatingShape({ position, geometry, color }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
      floatingRange={[-0.5, 0.5]}
    >
      <mesh ref={meshRef} position={position}>
        {geometry === 'sphere' && <Sphere args={[1, 32, 32]} />}
        {geometry === 'box' && <Box args={[1.5, 1.5, 1.5]} />}
        {geometry === 'torus' && <Torus args={[1, 0.4, 16, 100]} />}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>
    </Float>
  )
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />

      {/* Floating shapes with warm colors */}
      <FloatingShape position={[-4, 2, -3]} geometry="sphere" color="#D4735E" />
      <FloatingShape position={[4, -2, -4]} geometry="box" color="#C4B5A0" />
      <FloatingShape position={[-3, -3, -5]} geometry="torus" color="#E8907A" />
      <FloatingShape position={[3, 3, -3]} geometry="sphere" color="#B09F8F" />
      <FloatingShape position={[0, 0, -6]} geometry="box" color="#D4735E" />
    </>
  )
}

// Main Hero3D Component
export default function Hero3D() {
  return (
    <div className="absolute inset-0 opacity-40">
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
