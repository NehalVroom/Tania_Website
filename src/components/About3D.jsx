import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Rotating ring component
function RotatingRing({ position, color, speed = 1 }) {
  const ringRef = useRef()

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      ringRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ringRef} position={position}>
        <Torus args={[1.5, 0.15, 32, 100]} />
        <MeshDistortMaterial
          color={color}
          distort={0.2}
          speed={1}
          roughness={0.1}
          metalness={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

// Central sphere with wobble effect
function CentralSphere() {
  const sphereRef = useRef()

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <Sphere args={[1.2, 64, 64]} />
        <MeshWobbleMaterial
          color="#D4735E"
          factor={0.4}
          speed={0.8}
          roughness={0.1}
          metalness={0.4}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

// Orbiting small spheres
function OrbitingSphere({ radius, angle, speed, color }) {
  const sphereRef = useRef()

  useFrame((state) => {
    if (sphereRef.current) {
      const time = state.clock.elapsedTime * speed
      sphereRef.current.position.x = Math.cos(time + angle) * radius
      sphereRef.current.position.z = Math.sin(time + angle) * radius
      sphereRef.current.position.y = Math.sin(time * 2) * 0.5
    }
  })

  return (
    <mesh ref={sphereRef}>
      <Sphere args={[0.3, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.6} />
    </mesh>
  )
}

// Main scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#FFF5E6" />
      <pointLight position={[-5, 0, 0]} intensity={0.5} color="#E8907A" />
      <pointLight position={[5, 0, 0]} intensity={0.5} color="#C4B5A0" />

      {/* Central sphere */}
      <CentralSphere />

      {/* Rotating rings */}
      <RotatingRing position={[0, 0, 0]} color="#E8907A" speed={1} />
      <RotatingRing position={[0, 0, 0]} color="#C4B5A0" speed={0.7} />

      {/* Orbiting spheres */}
      <OrbitingSphere radius={3} angle={0} speed={0.5} color="#D4735E" />
      <OrbitingSphere radius={3} angle={Math.PI * 0.66} speed={0.5} color="#E8907A" />
      <OrbitingSphere radius={3} angle={Math.PI * 1.33} speed={0.5} color="#C4B5A0" />
      <OrbitingSphere radius={2.5} angle={Math.PI * 0.5} speed={-0.6} color="#B09F8F" />
      <OrbitingSphere radius={2.5} angle={Math.PI * 1.5} speed={-0.6} color="#FAF7F2" />
    </>
  )
}

// Main About3D component
export default function About3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
