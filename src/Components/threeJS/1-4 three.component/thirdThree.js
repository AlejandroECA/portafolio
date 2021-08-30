import React,{useRef, useEffect} from 'react';
import * as THREE from 'three';

const ThirdThree = () =>{


    const mount = useRef(null)


    useEffect(()=>{

        let width = mount.current.clientWidth
        let height = mount.current.clientHeight


        //scene
        const scene = new THREE.Scene();
        // scene.background =  new THREE.Color('gray');
        // let frameId

        // const loader = new THREE.TextureLoader();
        // const bgTexture = loader.load('./../../../public/palm-fronds-and-sky.jpeg');
        // scene.background = bgTexture;

        //camera
        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1 , 10000);
        camera.position.z = 5

        //light
        const light = new THREE.DirectionalLight('white',1.5);
        light.position.set(0,1,5)
        scene.add(light)

        //geometry and materials for the obj
        const geometry = new THREE.BoxGeometry(1.5,1.5,1.5)
        const material = new THREE.MeshStandardMaterial({color:'skyblue'})

        //object
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube)

        const cube2 = new THREE.Mesh(geometry, material);
        cube2.position.x = +4;
        scene.add(cube2)

        const cube3 = new THREE.Mesh(geometry, material);
        cube3.position.x = -4;
        scene.add(cube3)


        //Render
        const renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setClearColor('#000000',0)
        renderer.setSize(width, height)

        const renderScene = () => {
            renderer.render(scene, camera)
        }


        //ReSize

        const handleResize = () => {
            width = mount.current.clientWidth
            height = mount.current.clientHeight
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderScene()
        }

        //Animation 
        
        const animate = () => {
            cube.rotation.y += 0.01
            cube2.rotation.x += 0.01
            cube3.rotation.x += 0.01
            renderScene()
            window.requestAnimationFrame(animate)
            // frameId = window.requestAnimationFrame(animate)
        }
        

        //posible switches

        // const start = () => {
        //     if (!frameId) {
        //       frameId = requestAnimationFrame(animate)
        //     }
        // }

        // const stop = () => {
        //     cancelAnimationFrame(frameId)
        //     frameId = null
        // }

        //initialization

            //add to doom
        mount.current.appendChild(renderer.domElement)
            //handle resize
        window.addEventListener('resize', handleResize)
            //start painting
        //start()
        animate()

        //will-unMount
        return () => {
            // stop()
            window.removeEventListener('resize', handleResize)
            mount.current.removeChild(renderer.domElement)
            scene.remove(cube)
        }

    },[])



    return(
        <div style={{ width: '90vw', height: '200px', margin:'20px' }} ref={mount} ></div>
    )
}

export default ThirdThree;