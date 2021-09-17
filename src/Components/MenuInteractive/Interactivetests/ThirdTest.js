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


const ThirdTest = () => {
    return(
        <a.div>
            This is the 3
        </a.div>
    )
}

export default ThirdTest