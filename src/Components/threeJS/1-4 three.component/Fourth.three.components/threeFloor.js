import React from 'react';
import {useTexture} from '@react-three/drei'



const Floor = (img,...props) => {

    const textureFloor = useTexture(img);

    // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(THREE.TextureLoader, [
    //     '../../data/textures/rocks_ground/rocks_ground_02_col_4k.jpg',
    //     '../../data/textures/rocks_ground/rocks_ground_02_height_4k.jpg',
    //     '../../data/textures/rocks_ground/rocks_ground_02_nor_4k.jpg',
    //     '../../data/textures/rocks_ground/rocks_ground_02_rough_4k.jpg',
    //     '../../data/textures/rocks_ground/rocks_ground_02_AO_4k.jpg'
    //   ]
    // )

    return(
        <mesh {...props} 
        receiveShadow
        position={[0,-0.15,0]}
        >
            <boxBufferGeometry 
            args={[5,0.3,5]} 
        
            />
            <meshPhysicalMaterial color='gray' 
            displacementScale={0.2}

            // map={colorMap}
            // displacementMap={displacementMap}
            // normalMap={normalMap}
            // roughnessMap={roughnessMap}
            // aoMap={aoMap}
            map={textureFloor}
            />
        
        </mesh>
    )
}

export default Floor