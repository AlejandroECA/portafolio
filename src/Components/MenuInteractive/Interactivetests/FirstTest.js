/** @jsxImportSource @emotion/react */

import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, withRouter, Link, useLocation } from "react-router-dom";
import { motion as a, AnimatePresence } from "framer-motion";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jsx, css } from "@emotion/react";

const imgs = [
  "https://images.pexels.com/photos/2519220/pexels-photo-2519220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
  "https://images.pexels.com/photos/2263675/pexels-photo-2263675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
  "https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
  "https://images.pexels.com/photos/417292/pexels-photo-417292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
];

const imgVariants = {
  initial: { x: '100vw' },
  animate: {
    x:0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
      easing: 'easeInOut',
    },
  },
  exit: {
    x:'-100vw',
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      easing: 'easeInOut',

    },
  },
};


const Slider = ({ imgs, showBar }) => {

  const [number, setNumber] = useState(0);
  const iLen = imgs.length


    setTimeout(() => { 
        if(number < iLen-1){
            setNumber(number+1)
        }
        else setNumber(0)
        },2000)
  


  return (
      <AnimatePresence>
      <a.div 
      style={{ width: `${showBar ? "65vw" : "85vw"}` , border: "20px solid black"}}
      initial={{opacity:0}}
      animate={{opacity:1, transition:{duration:1}}}
      exit={{opacity:0, transition:{duration:1}}}
      >

        <a.img
          variant={imgVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          src={`${imgs[number]}`}
          alt=""
          style={{ background: "black", width: "100%", marginRight: "10px" }}
          key={number}
        />

        </a.div>
    </AnimatePresence>

  );
};

const FirstTest = ({ showBar }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <a.div>
      <Slider imgs={imgs} showBar={showBar} />
    </a.div>
  );
};

export default FirstTest;
