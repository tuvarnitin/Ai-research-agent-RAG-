import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model'

const Scene = () => {

  return (
    <Canvas>
      <ambientLight intensity={0.09} />
      <perspectiveCamera />
      <Model />
    </Canvas>
  )
}

export default Scene