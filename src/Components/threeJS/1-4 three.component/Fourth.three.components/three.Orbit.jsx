import React,{useRef,Suspense, useState} from 'react';
import { 
    Canvas, 
    useFrame, 
    extend, 
    useThree,
    useLoader
} from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


extend({OrbitControls});

const Orbit = () => {

    //useThree brings elements w/o fps , just once
    const { camera, gl } = useThree();

    return(
        <orbitControls args ={[camera, gl.domElement]}/>
    )
}

export default Orbit