import React,{useRef,Suspense, useState,lazy,useEffect, useMemo} from 'react';
import * as THREE from 'three'
import { 
    Canvas, 
    useFrame, 
    extend, 
    useThree,
    useLoader
} from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import imgRock from '../../../data/textures/rocks_ground/rocks_ground_02_col_4k.jpg'
import imgBrick from '../../../data/textures/bricks/castle_brick_broken_06_diff_8k.jpg'

import {useTexture, Environment, Html, useProgress, useGLTF, useAnimations} from '@react-three/drei'

import { DragControls } from 'three/examples/jsm/controls//DragControls';

import { Physics, useBox } from '@react-three/cannon';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import modelUrl from './../../../data/Parrot.glb'

import { AnimationClip } from 'three';

import {
    EffectComposer,
    DepthOfField ,
    Bloom,
    GodRays
} from 'react-postprocessing'


// import Floor from './three.components/threeFloor'
// import Orbit from './three.components/three.Orbit.jsx'
// import Loader from './three.components/three.Loader.jsx'
// import Box from './three.components/three.Box.js'

//TODO: make components reusable do not work 

// const imgRock =lazy(()=>{import('../../data/textures/rocks_ground/rocks_ground_02_col_4k.jpg')});


// TODO: check Suspence fallback / check textures 5x / check 3D background

extend({OrbitControls});
extend({DragControls})
extend({GLTFLoader})

const Orbit = () => {

    //useThree brings elements w/o fps , just once
    const { camera, gl } = useThree();

    return(
        <orbitControls 
        attach='orbitControls' 
        args ={[camera, gl.domElement]}
        enabled={false}
        zoom={true}
        />
    )
}

const Loader =() =>{
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>{progress} % loaded</Html>;
}


const Floor = props => {

    const textureFloor = useTexture(imgBrick);

    // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(THREE.TextureLoader, [
    //     '../../data/textures/rocks_ground/rocks_ground_02_col_4k.jpg',
    //     '../../data/textures/rocks_ground/rocks_ground_02_height_4k.jpg',
    //     '../../data/textures/rocks_ground/rocks_ground_02_nor_4k.jpg',
    //     '../../data/textures/rocks_ground/rocks_ground_02_rough_4k.jpg',
    //     '../../data/textures/rocks_ground/rocks_ground_02_AO_4k.jpg'
    //   ]
    // )

    const [ref,api] = useBox(()=>({
        ...props,
        args:[10,0.3,20]
    })) //physical properties

    return(
        <mesh {...props} 
        receiveShadow
        ref={ref}
        >
            <boxBufferGeometry args={[10,0.3,20]} />
            <meshPhysicalMaterial 
            color='gray' 
            displacementScale={0.2}
            // map={colorMap}
            // displacementMap={displacementMap}
            // normalMap={normalMap}
            // roughnessMap={roughnessMap}
            // aoMap={aoMap}
            map={textureFloor}
            // transparent={0.7}
            // opacity={0.5}
            />
        
        </mesh>
    )
}



const Bulb = props =>{

    const ref2 = useRef()
    const {scene} = useThree()

    useEffect (()=>{
        if(scene.ligths) scene.ligths.push(ref2)
        else scene.ligths = [ref2]

    },[])

    const [active, SetActive] = useState(true)

    const [ref,api] = useBox(()=>({
        ...props
    })) //physical properties


    const handlePointerDown = e => {

        SetActive(!active)
        e.object.active = active;


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

    return(
        <mesh {...props}
        onPointerDown={handlePointerDown}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        ref={ref}
        api={api}
        >
            <sphereBufferGeometry args={[0.2,20,20]}/>
            <meshPhysicalMaterial 
                // emissive='white'
                metalness={1}
                roughness={0}
                />
            <pointLight 
            position={[0,0,0]} 
            intensity={[2]} 
            castShadow 
            shadow-mapSize-height = {2**10}
            shadow-mapSize-width = {2**10}
            shadow-radius = {5}
            />

        </mesh>
    )
}

const Box = (props) =>{

    // const ref = useRef();
    const [active, SetActive] = useState(true)


    const textureRocks = useTexture(
        imgRock
    );

    const [ref,api] = useBox(()=>({
        ...props,mass:1
    })) //physical properties


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

    // now due the physics i have another ref and api... thats wy is comented ⤵ 
    // useFrame( state => {
    //     ref.current.rotation.x += 0.01;
    //     ref.current.rotation.y += 0.01;        
    // })



    const handlePointerDown = e => {

        SetActive(!active)
        e.object.active = active;


        if (e.object.active){
            scaleUp(e.object)
        }else{scaleDown(e.object)}
    }

    const handlePointerEnter = e => {
        scaleUp(e.object)
    }

    const handlePointerLeave = e => {

        // if (!e.object.active){
        //     scaleDown(e.object)
        // }
        return null
    }

    const scaleDown = Object => {

        // if (!Object.active){
        //     Object.scale.x = 1
        //     Object.scale.y = 1
        //     Object.scale.z = 1
        // }
        return null
    }

    const scaleUp = Object => {

        // if (!Object.active){
        //     Object.scale.x = 1.5
        //     Object.scale.y = 1.5
        //     Object.scale.z = 1.5
        // }
        return null
    }

    //reusable component adding animation from useFrame
    return(
        //linking the bucket ref
        //complex material ===> complex render
        <mesh ref={ref} 
        {...props} 
        api={api}
        castShadow  
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        // receiveShadow
        >
            <boxGeometry/>
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

const Background = props => {

    const { gl } = useThree();


    const texture = useLoader(
        THREE.TextureLoader,
        '/src/data/background/lot_01.jpg'

    )

    const formatted = useMemo(()=>{

        const formatted = new THREE.WebGLCubeRenderTarget(
            texture.image.height
        ).fromEquirectangularTexture(gl, texture)

    },[])


    return (
        <primitive 
        attach='background'
        object={formatted}
        />
    )
}


const Dragable = props => {


    const {camera,gl,scene} = useThree();
    const groupRef = useRef()
    const controlsRef = useRef()
    const [children,setChildren] = useState([])


    useEffect(()=>{
        setChildren(groupRef.current.children)
    },[])

    useEffect(()=>{

        controlsRef.current.addEventListener('hoveron', e => scene.orbitControls.enabled = false )

        // controlsRef.current.addEventListener('hoveron', e => console.log(scene.orbitControls))
        // controlsRef.current.addEventListener('hoveroff', e => console.log(scene.orbitControls.enabled))

        controlsRef.current.addEventListener('hoveroff', e => scene.orbitControls.enabled = true )


        controlsRef.current.addEventListener('drag', e => {
            
            e.object.api?.position.copy(e.object.position)
            e.object.api?.velocity.set(0,0,0)
        } )
        
        controlsRef.current.addEventListener('dragstart', e => {
            e.object.api?.mass.set(0)
        } )

        controlsRef.current.addEventListener('dragend', e => {
            e.object.api?.mass.set(1)
        } )



    },[children])


    return(
        <group ref={groupRef}>
            <dragControls
                transfornGroup={props.transfornGroup}
                ref={controlsRef}
                args={[children,camera,gl.domElement]}
            />
            {props.children}
        </group>
    )
}

const Model = (props) => {

    // const model = useLoader(GLTFLoader,modelUrl)
    const {scene,nodes,materials, animations} = useGLTF(modelUrl)

    // let mixer =  new THREE.AnimationMixer(scene)
    // const clip = animations.find((clip) => clip.name === 'parrot_A_')
    // const action = mixer.clipAction( clip )


    // console.log(animations);


    // let loader = new GLTFLoader()

    // loader.load(modelUrl)

    scene.traverse(child => {
        if(child.isMesh){
            child.castShadow = true
            child.receiveShadow =  true
            child.material.side = THREE.FrontSide
        }
    })

    return(

        <primitive
            // onclick={ (e) => action.play()}
            object={scene}
            {...props}
            position={[0,3,3]}
            castShadow
            receiveShadow
            scale={props.scale}
        />
    )

};

const BoundingBox = (props) => {

    const {
        position = [0,0,0],
        offset =[0,0.5,0],
        dims = [1,1,1],
        visible = false,
        children
    } = props
    

    const [ref,api]= useBox(()=>({
        mass:0,
        args:dims,
        position:position,
    }))

    return(
        <group ref={ref} api={api}>
            <mesh visible={visible} scale={dims}>
                <boxBufferGeometry />
                <meshPhysicalMaterial wireframe />
            </mesh>

            <group position={offset}>
                {children}
            </group>

        </group>
    )
}


const state = { 
    active : null,
    cameraPos: new THREE.Vector3(-4,4,4),
    target: new THREE.Vector3(4,0,0),
    shouldUpdate:true

}

const CameraControls = (props) => {

  
    useFrame(({camera,scene}) => {

        if(state.shouldUpdate){

            // camera.position.lerp((state.cameraPos),0.1)

            // console.log(scene);

            //orbit controls attached before to the scene
            // scene.orbitControls.update()

            // scene.orbitControls.target.lerp((state.target,0.1))//try to set up the target
        

            // const diff = camera.position.clone().sub(state.cameraPos).length() //clone the camera position to not mutated, substract the state.cameraPos and if have some difference ...update

            // if( diff < 0.1 ) {
            //     return state.shouldUpdate = false
            // }
        }

    })

    return(
        null
    )
}

const CameraButtons =(props) =>{

    const styles = {
        zIndex:1,
        position:'absolute',
        bottom:'30vh',
        height:'37px',
        width:'37px',
        background:'white',
        textAlign:'center',
        borderRadius:'100%',
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        opacity:'0.7',
        border:'1px solid black',   
    }

    const sets = {
        1:{
            cameraPos:[7,7,7],
            target:[4,0,0]
        },
        2:{
            cameraPos:[-3,7,7],
            target:[-4,0,0]
        }
    }

    const handleClick = (num) => {

        state.cameraPos.set(sets[num].cameraPos)
        state.target.set(sets[num].target)

    }

    //TODO: fix the update on camera to make works the changues with the buttons

    return(
        <div style={{marginLeft:'60%'}}>
            <button style={{
                ...styles,left:'40vw'
            }}
            onclick={e => handleClick(1)}
            >
                {'<'}
            </button>

            <button style={{
                ...styles,rigth:'80vw',
            }}
            onclick={e => handleClick(2)}
            >
                {'>'}
            </button>

        </div>
    )
}

// TODO: Effects do not work
const Effects = () => {
    return (


        <EffectComposer>
            <DepthOfField 
                focusDistance={0}
                focalLength ={0.02}
                bokehScale={2}
                height={480}
            />

            <Bloom 
                luminanceThreshold={1}
                luminanceSmoothing={0.9}
                height={300}
            />

        </EffectComposer>

    )

}

const FouthThree = () => {

    // const texture1 = useTexture('/src/data/textures/bricks/castle_brick_broken_06_diff_8k.jpg')

    const handleClick = e => {
        if(!window.activeMesh){
            window.activeMesh.material.color = new THREE.Color(e.target.background)
        }
    }

    const styleColor = {
        height:'50px', 
        width: '50px',
        left:0,
        rigth:0,
        width:'fit-content',
        display:'flex',
        marginLeft:'43vw',
        
    }

    return(
        <div style={{ width: '98vw', height: '400px', margin:'10px' }}>
        {/* <div style={{ 
            position: 'absolute',
            zIndex:1,
            ...styleColor
        }}>
            <div 
                onclick={handleClick}
                style={{
                background:'blue', 
                height:'50px', 
                width: '50px'
            }}>
            </div>
            <div 
                onclick={handleClick}
                style={{
                background:'yellow', 
                height:'50px', 
                width: '50px'}}>
            </div>
            <div 
                onclick={handleClick}
                style={{
                background:'white', 
                height:'50px', 
                width: '50px'}}>
            </div>
        </div> */}

        {/* <CameraButtons /> */}


            <Canvas 
                gl={{
                    powerPreference:'high-performance',
                    antialias: false,
                    // stencil:false,
                    depth:false
                }}
                shadows
                camera={{ 
                    position:[-4,4,4],
                }}>

                {/* <CameraControls /> */}


                <Suspense fallback={ <Loader/> } >

                    <Orbit />


                    <Environment 
                        preset={'dawn'}
                        // // // background files={'lot_01.jpg'} 
                        // // path={'./../../../public/palm-fronds-and-sky.jpeg'}   
                        background
                        scene={undefined}
                    />

                    <directionalLight 
                        position={[6,6,6]} 
                        intensity={[2]} 
                        castShadow 
                        shadow-mapSize-height = {2**10}
                        shadow-mapSize-width = {2**10}
                        shadow-radius = {5}
                    />

                    <Physics>

                        <Dragable>

                            <Box img={imgRock} position={[1,1.5,1]} />
                            <Box img={imgRock} position={[-1,3,-1]}/>
                            <Bulb position={[0,2.5,0]}/>
                
                        </Dragable>

                        <Dragable transfornGroup>


                            <BoundingBox
                                // visible
                                position ={[0,3,3]}
                                dims={[1,1,1]}
                                offset={[0,-3,-3]}
                                //TODO: CHECK BOUNDING CHINDREN - NOT WORKING- ⤵ 
                            >
                                <Model scale = { new Array(3).fill(0.01)} />

                            </BoundingBox>

                        
                        </Dragable>

                        <Floor img={imgBrick} 
                            position={[0,-0.15,0]}
                        />

                    </Physics>



                    <axesHelper />

                    <ambientLight intensity={0.5} />

                </Suspense>

            </Canvas>
        </div>
    )

};

export default FouthThree

//Enviroment



//================================================

//w/o @react-three/fiber ⤵  - TODO: fix ref of return (posible bug)

// const width = window.innerWidth
// const height = window.innerHeight

// //scene
// const scene = new THREE.Scene();

// //camera
// const fov = 75;
// const aspect = width / height;
// const near = 0.1;
// const far = 100;
// const camera =  new THREE.PerspectiveCamera(fov,aspect,near,far)
// camera.position.z = 5

// //renderer
// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(width, height);

// //add to the Doom
// document.body.innerHTML = '';
// document.body.appendChild(renderer.domElement);

// //characteristics
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshPhongMaterial({color:'blue'})

// //object
// const cube = new THREE.Mesh(geometry,material)
// scene.add(cube);

// //render loop
// function animate() {
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01
//     cube.rotation.y += 0.01

//     renderer.render(scene,camera);
// }

// animate()

// window.addEventListener('resize', () => {
//     renderer.setSize(width, height);
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();
// })

// return(
//     null
//     )