import React,{useRef, useState} from 'react';
import {ContainerStyledDiv} from './fifthThree.styles'

import { Canvas, useFrame } from '@react-three/fiber'
import {softShadows, MeshWobbleMaterial, OrbitControls} from '@react-three/drei'

import { useSpring, animated as a , config} from '@react-spring/three'

softShadows()

const BoxComponent = ({position,color,dimentions,speed,factor,rotation}) => {

    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01 ))

    const [expand, setExpand] = useState(false)
    const [hovered, setHover] = useState(false);

    //only modify the props of the component we add this props -- in this case mesh
    const props = useSpring({
        scale: expand?[1.4,1.4,1.4]:[1,1,1],
        config:config.wobbly
    })


    return(


        //adding a. to transform to animated component from spring
        <a.mesh 
            ref={mesh}
            position = {position}
            castShadow
            rotation = {rotation}
            onClick={()=> setExpand(!expand)}
            scale={props.scale}
            config={props.config}
            onPointerOver={e => setHover(true)}
            onPointerOut={e => setHover(false)}
        >

            <boxBufferGeometry 
                attach='geometry' //represent geometry or material
                args={dimentions} //dimentions check docs of box buffer geometry
            />
            <MeshWobbleMaterial
                attach='material'
                color={hovered?'pink':color}
                speed={speed}
                factor={factor}
            />
        </a.mesh>
        
    )
}



const FifthThree = () =>{


    return(
        <>
        {/* 
            <ContainerStyledDiv>
                Este es el 5
            </ContainerStyledDiv>
        */}

            <Canvas style={{
                width:'102vw',
                height:'500px',
                background:'#f1f4f8',
                margin:'20px 0 0 0'
            }}
                colorManagement
                camera={{position:[-5,2,10],fov:60}}
                shadows
            >

            {/* 
                <axesHelper
                    position={[0,-3,0]}
                />
            */}
            

                <ambientLight
                    intensity={0.3}
                />

                <pointLight position={[-10,0,-20]} intensity={0.5}/>
                <pointLight position={[0,-10,0]} intensity={1.5}/>

                <group>
                    <mesh
                        rotation={[-Math.PI/2,0,0]}
                        position={[1,-3,0]}
                        receiveShadow
                    >
                        <planeBufferGeometry 
                            attach='geometry'
                            args={[200,200]}
                        />
                        <shadowMaterial
                            attach='material'
                            opacity={0.2}
                        />



                    </mesh>
                </group>


                <directionalLight 

                    position={[0,10,0]}
                    intensity={[1]}

                    // shadow-mapSize-width = {1024}
                    // shadow-mapSize-height = {1024}

                    shadow-mapSize-height = {1024}
                    shadow-mapSize-width = {1024}
                    
                    // shadow.mapSize.width ?? aparently this is the new method

                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-rigth={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}

                    castShadow

                    position={[-0.01,10,0]} //ad to avoid the cuting shadow

                    // shadow-radius ={5}

                />

                <BoxComponent
                    position={[-2,1,-5]}
                    color={'green'}
                    dimentions={[1,1,1]}
                    speed={3}
                    factor={1}
                    rotation={[1,2,1]}

                />

                <BoxComponent
                    position={[0,1,0]}
                    color={'yellow'}
                    dimentions={[1,2,2]}
                    speed={1}
                    factor={0.6}


                />

                <BoxComponent
                    position={[5,1,-2]}
                    color={'red'}
                    dimentions={[1,1,1]}
                    speed={2}
                    factor={1}
                    rotation={[1,-2,0]}


                />

                <OrbitControls 
                    enableZoom={false}
                />


            </Canvas>   
        </>
    )
}

export default FifthThree