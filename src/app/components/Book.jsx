
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Wizard(props) {
  const { nodes, materials } = useGLTF('/models/book-transformed.glb')

  const modelRef = useRef()

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = Math.sin(state.clock.elapsedTime)*0.3
  })


  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[-0.2, 0, 0]}
    scale={[8, 8, 8]}
    rotation={[-0.50, -0.25, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_texturing_v2_book_paladins_book_0.geometry}
        material={materials.paladins_book}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_texturing_v2_pages_paladin_pages_0.geometry}
        material={materials.paladin_pages}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/book-transformed.glb')