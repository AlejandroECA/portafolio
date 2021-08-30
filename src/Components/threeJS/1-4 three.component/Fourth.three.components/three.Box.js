
import React,{useRef, useState} from 'react';
import { 
    useFrame, 
} from '@react-three/fiber';

import {useTexture} from '@react-three/drei'


const Box = (img,position,...props) =>{

    const ref = useRef();
    const [active, SetActive] = useState(true)


    const textureRocks = useTexture(
        img
    );


    // const HMap = useLoader(
    //     THREE.TextureLoader, 
    //     '../../data/textures/rocks_ground/rocks_ground_02_height_4k.jpg'
    // );

    // const normalMap = useLoader(
    //     THREE.TextureLoader, 
    //     '../../data/textures/rocks_ground/rocks_ground_02_nor_4k.jpg'
    // );

    // const [colorMap, HMap, normalMap, roughnessMap, aoMap] = useLoader(THREE.TextureLoader, [
    //     '../../data/textures/rocks_ground/rocks_ground_02_col_4k.jpg',
    //     '../../data/textures/rocks_ground/rocks_ground_02_height_4k.jpg',
    //     '../../data/textures/rocks_ground/rocks_ground_02_nor_4k.jpg',
    //     '../../data/textures/rocks_ground/rocks_ground_02_rough_4k.jpg',
    //     '../../data/textures/rocks_ground/rocks_ground_02_AO_4k.jpg'
    //   ]
    // )

    //access to render propretty 60fps
    useFrame( state => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;        
    })


    const handlePointerDown = e => {

        SetActive(!active)
        e.object.active = active;

        console.log(e.object.active);

        if (e.object.active){
            scaleUp(e.object)
        }else{scaleDown(e.object)}
    }

    const handlePointerEnter = e => {
        scaleUp(e.object)
    }

    const handlePointerLeave = e => {

        if (!e.object.active){
            scaleDown(e.object)
        }
    }

    const scaleDown = Object => {

        if (!Object.active){
            Object.scale.x = 1
            Object.scale.y = 1
            Object.scale.z = 1
        }
    }

    const scaleUp = Object => {

        if (!Object.active){
            Object.scale.x = 1.5
            Object.scale.y = 1.5
            Object.scale.z = 1.5
        }
    }

    //reusable component adding animation from useFrame
    return(
        //linking the bucket ref
        //complex material ===> complex render
        <mesh 
        ref={ref} 
        {...props} 
        castShadow  
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        position={[1,1.5,1]}

        // receiveShadow
        >
            <boxGeometry
            />
            <meshPhysicalMaterial 
            // color= 'skyblue'
            // fog={true}
            // opacity={0.5}
            // transparent={true}
            // visible={true} //hide or not
            // wireframe //the frame
            // metalness={1} //similar to metal
            // roughness={0.5} //ligth refletion 0-1
            // clearcoat={1} //reflexion coat 
            // transmission = {1} // make the obj similar to glass
            // reflectivity={1}
            // side={THREE.DoubleSide}

            // map={colorMap}
            // displacementMap={HMap}
            // normalMap={normalMap}
            // roughnessMap={roughnessMap}
            // aoMap={aoMap}

            metalness={1}
            roughness={0}
            
            map={textureRocks}
            attach='material'
            // displacementScale={0.2}

            />
        </mesh>
    )
}

export default Box