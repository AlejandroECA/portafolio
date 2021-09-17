import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter, Link, useLocation } from "react-router-dom";
import { motion as a, AnimatePresence, useCycle } from "framer-motion";
import {
  faAngleRight,
  faAngleLeft,
  faHome,
  faBoxOpen,
  faAddressBook,
  faBacon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const containerVariants = {
    initial: { x: '100vw' },
    animate:{
        x:0,
        transition: {
            duration:2,
            type: 'spring',
            stiffness:120,
        }
    },
    //check this is not working
    exit: { x: '100vw ',
    transition: {
        duration:2,
        type: 'spring',
        stiffness:100,
    }}
}

const CanvasRouter = ({showBar,children}) => {
    return(
        <AnimatePresence>
            <a.div 
                style={{paddingLeft:`${showBar?'2vw':'2vw'}` , color:'black', paddingTop:'130px'}}
                variants={containerVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                key='canvas'
            >
                {children}
            </a.div>
        </AnimatePresence>
    )
}

export default withRouter(CanvasRouter)