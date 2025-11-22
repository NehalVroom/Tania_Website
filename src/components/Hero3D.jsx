import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Box, Torus, MeshWobbleMaterial, Icosahedron, Octahedron } from '@react-three/drei'
import * as THREE from 'three'

// Floating geometric shape component with enhanced visuals
function FloatingShape({ position, geometry, color, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.6}
      floatIntensity={1.2}
      floatingRange={[-0.8, 0.8]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry === 'sphere' && <Sphere args={[1, 64, 64]} />}
        {geometry === 'box' && <Box args={[1.5, 1.5, 1.5]} />}
        {geometry === 'torus' && <Torus args={[1, 0.35, 32, 100]} />}
        {geometry === 'icosahedron' && <Icosahedron args={[1, 1]} />}
        {geometry === 'octahedron' && <Octahedron args={[1.2, 0]} />}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.3}
          envMapIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

// Wobbling decorative shape
function WobbleShape({ position, color }) {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={position}>
        <Sphere args={[0.8, 64, 64]} />
        <MeshWobbleMaterial
          color={color}
          attach="material"
          factor={0.6}
          speed={1}
          roughness={0.1}
          metalness={0.4}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  )
}

// Particle system for ambient beauty
function Particles() {
  const count = 50
  const particlesRef = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#D4735E"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

// Main 3D Scene with enhanced lighting and more shapes
function Scene() {
  return (
    <>
      {/* Enhanced lighting for beauty */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#FFF5E6" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#FFE4C4" />
      <pointLight position={[0, 5, 2]} intensity={0.8} color="#D4735E" />
      <spotLight position={[5, 5, 5]} angle={0.3} intensity={0.5} color="#E8907A" />

      {/* Particles for ambient atmosphere */}
      <Particles />

      {/* Main floating shapes - more variety */}
      <FloatingShape position={[-4, 2, -4]} geometry="icosahedron" color="#D4735E" scale={1.2} />
      <FloatingShape position={[4, -2, -5]} geometry="octahedron" color="#C4B5A0" scale={1} />
      <FloatingShape position={[-3, -3, -6]} geometry="torus" color="#E8907A" scale={0.9} />
      <FloatingShape position={[3, 3, -4]} geometry="sphere" color="#B09F8F" scale={1.1} />
      <FloatingShape position={[0, 0, -7]} geometry="box" color="#D4735E" scale={0.8} />
      <FloatingShape position={[-5, -1, -5]} geometry="sphere" color="#E8DFD0" scale={0.7} />
      <FloatingShape position={[5, 1, -6]} geometry="icosahedron" color="#FAF7F2" scale={0.6} />

      {/* Wobble shapes for extra visual interest */}
      <WobbleShape position={[2, 4, -8]} color="#D4735E" />
      <WobbleShape position={[-2, -4, -7]} color="#E8907A" />
      <WobbleShape position={[6, 0, -9]} color="#C4B5A0" />
    </>
  )
}

// Main Hero3D Component
export default function Hero3D() {
  return (
    <div className="absolute inset-0 opacity-50">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
