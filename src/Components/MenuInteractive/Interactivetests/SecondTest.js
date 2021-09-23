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
import { useWheel } from '@use-gesture/react'


const data = [
    { 
        title: 'TITLE 0',
        id:0,
        url:'/'
    },
    { 
        title: 'TITLE 1',
        id:1,
        url:'/case1'
    },
    { 
        title: 'TITLE 2',
        id:2,
        url:'/case2'
    },
    { 
        title: 'TITLE 3',
        id:3,
        url:'/case3'
    }
]

const SecondTest = () => {
    return(
        <a.div>
            This is the Second
        </a.div>
    )
}

export default SecondTest