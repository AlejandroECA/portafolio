import React from 'react';
import {useTexture, Environment, Html, useProgress} from '@react-three/drei'


const Loader = () =>{
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>{progress} % loaded</Html>;
}

export default Loader