/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: moxstudios (https://sketchfab.com/moxstudios)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/super-meat-boy-free-9ef65984d2404dfa9138abb982ab0971
title: Super Meat Boy Free
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.Super_meat} />
        <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
        <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
        <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
        <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.glb')