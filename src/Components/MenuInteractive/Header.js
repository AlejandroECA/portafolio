import React,{useState, useEffect} from 'react';
import { Switch, Route , withRouter,Link, useLocation} from 'react-router-dom'
import { motion as a, AnimatePresence, useCycle } from 'framer-motion';

const headerVariants = {
    initial:{ x: '-100vw'},
    animate:{
        x:0,
        color:["#000", '#FA5882', "#000"],
        transition: {
            duration:2,
            ease:'easeInOut',
            type:'spring',
            color:{
                yoyo:Infinity,
                duration:4
            }
        }

    }
}

const HeaderInteract = () => {
    return(
        <a.div 
        variants={headerVariants}
        initial='initial'
        animate='animate'
        className="header"
        style={{
            width:'100vw',
            paddingLeft:'75vw',
            paddingTop:'20px',
            height:'100px',
            color:'black',
            fontSize:50,
            fontWeight:'bold',
            position: 'absolute',
            // top: '10px', 
            // left: '40px'
        }}
        
        >
            LOGO
        </a.div>

    )
}

export default HeaderInteract