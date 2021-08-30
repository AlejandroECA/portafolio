import React,{Suspense,useRef,useEffect} from 'react'
import {
    SixHeaderInnerContainer,
    SixContainerDiv,
    SixTitleDiv
} from './sixThree.styles'
import {
    Canvas,
    useFrame
} from '@react-three/fiber'
import {
    Html,
    useGLTF
} from '@react-three/drei'

import {Section} from './sections'
import modelUrl from './scene.glb'
import modelEYE from './EYE.glb'
import modelNewBalance from './NEW-BALANCE.glb'
// import Model from './Scene'

import sectionsDescriptions from './sectionsDescriptions'

import { useInView } from 'react-intersection-observer'


const HeaderOfSix = () =>{
    return (
        <header>
        <SixHeaderInnerContainer>
          <div className='logo'>SIX</div>
          <nav>
            <ul>
              <li>
                <a href='/'>Option1</a>
              </li>
              <li>
                <a href='/'>Option2</a>
              </li>
              <li>
                <a href='/'>Option3</a>
              </li>
              <li>
                <a href='/'>Option3</a>
              </li>
              <li className='btn'>
                <a href='/'>Button1</a>
              </li>
            </ul>
          </nav>
        </SixHeaderInnerContainer>
      </header>
    )
}

const HtmlContent =(
    {
    text,
    modelPath, //if i have diferent models
    positionY,//position in Y
    rotation,
    modelPosition,
    ligth,
    domContent,
    bgColor,
    color
    }) =>{

    const ref = useRef()
    useFrame(()=>{
        ref.current.rotation.y += rotation
    })

    const[refItem, inView] = useInView({
        treshold:0
    })

    useEffect(()=>{
        inView && (document.body.style.background=bgColor)
        inView && (document.body.style.color=color)
    },[inView])

    return(
        <Section
            offset={0.001} //diference of position relative to...???
            factor={10}
            
            // position ={[0,200,0]}
        >
            <group
                position ={[0,positionY,0]}
                scale={[0.8,0.8,0.8]}

                // scale={[1,1,1]}

                
            >
                <mesh
                    position={modelPosition}
                    ref={ref}
                    // portal={domContent}

                >
                    <Model 
                        modelPath={modelPath}
                    />
                    {ligth?<React.Fragment>
                        <pointLight
                            position={[0,60,0]}
                        />
                        </React.Fragment>:null}
                </mesh>


                <Html 
                Fullscreen
                portal={domContent}
                >
                    <SixContainerDiv
                        ref={refItem}
                    >
                        <SixTitleDiv
                        >{text}</SixTitleDiv>
                    </SixContainerDiv>
                </Html>
            </group>
        </Section>

    )
}

const Model = ({modelPath}) =>{
    const gltf = useGLTF(modelPath)
    return <primitive object={gltf.scene} dispose={null} />
}

const Ligths =() => {
    return (

        <React.Fragment>
            <ambientLight
                intensity={0.1}
            />
            <directionalLight 
                position={[0,-5,0]}
                intensity={1}
            />
            <pointLight
                intensity={1}
                position={[0,0,-10]}
            />
            {/*
                <spotLight 
                    intensity={0.05}
                    position={[0,0,10000]}
                />
            */}
        </React.Fragment>

    )
}

// const Model = (props) => {
//     const group = useRef()
//     const gltf = useGLTF('scene.glb')
//     const { nodes, materials } = gltf
//     return (
//       <group ref={group} {...props} dispose={null}>
//         <group rotation={[-Math.PI / 2, 0, 0]}>
//           <mesh geometry={nodes.mesh_0.geometry} material={materials.Super_meat} />
//           <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
//           <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
//           <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
//           <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
//         </group>
//       </group>
//     )
// }



const SixThree = () =>{

    const domContent = useRef()
    const scrollArea = useRef()
    const onScroll = (e) => {
        (sectionsDescriptions.top.current = e.target.scrollTop)
    }
    useEffect(() =>void onScroll({ target: scrollArea.current}),[])

     const generalHeight = `${sectionsDescriptions.sections*100}vh`

    return(


        <div 
        className="scrollArea"
        ref={scrollArea}
        onScroll={onscroll}
        style={{
            width:'100vw',
            height:'300vw',
            margin:0,
            padding:0,
        }}


        
        >
            <div
            style={{
                position:'sticky',
                top:0,
                width:'100vw',
                height:'1000px',
            }}
            ref={domContent}


            >

                <HeaderOfSix/>

                <Canvas
                    colorManagement
                    camera={{
                        position:[0,0,20],
                        fov:70,
                        display: 'flex',
                        justifyContent:'center'
                    }}
                >   

                    <Ligths />

                    <Suspense fallback={null}>

                        <HtmlContent 
                            positionY={3}
                            modelPath={modelUrl}
                            text={'" THE SIX "'}
                            rotation={0.005}
                            modelPosition ={[0,8,0]}

                            domContent={domContent}

                            bgColor={'#585858'}
                            // color={'white'}
                            


                        />


                        <HtmlContent 
                            positionY={-3}
                            modelPath={modelEYE}
                            text={'" THE EYE "'}
                            rotation={0.005}
                            modelPosition ={[0,8,5]}
                            ligth={true}

                            domContent={domContent}

                            bgColor={'#848484'}
                            // color={'white'}




                        />

                        <HtmlContent 
                            positionY={-10}
                            modelPath={modelNewBalance}
                            text={'" THE BALANCE "'}
                            rotation={0.005}
                            modelPosition ={[0,10,2.5]}

                            domContent={domContent}

                            bgColor={'#A4A4A4'}
                            // color={'black'}




                        />

                    </Suspense>

                </Canvas>


                
                
                
            </div>
                <div
                    style={{
                        height:`200px`,
                        // height:`${sectionsDescriptions.sections*50}vh`,
                        margin:'5px',
                        fontSize:'40px'
                    }}
                >
                
                  👇  
                </div>
            </div>
            
    )
}

export default SixThree 