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

const NavBar = [
  { name: "First Test", id: 1, link: "/menu/firstTest" },
  { name: "Second Test", id: 2, link: "/menu/secondTest" },
  { name: "Third Test", id: 2, link: "/menu/thirdTest" },
  { name: "Final Test", id: 2, link: "/menu/finalTest" },
];

const icons = [
  { icon: faHome, id: 1, link: "/firstTest" },
  { icon: faBoxOpen, id: 2, link: "SecondTest" },
  { icon: faAddressBook, id: 2, link: "SecondTest" },
  { icon: faBacon, id: 2, link: "SecondTest" },
];

const barVariants = {
  initialOn: { y: "100vw", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      type: "spring",
    },
  },
  exit: {
    x: "-100wv",
    transition: {
      // duration:1,
      ease: "easeInOut",
      type: "spring",
    },
  },
  initialOff: { x: "150", opacity: 0 },
  onHover: {
    // originX: 0,
    scale: 1.5,
    backgroundColor: "#f1f4f8",
    color: "black",
    text: "white",
  },
  hover: {},
  onHoverText: {
    color: "black",

  },
};

const Bar = ({showBar, setShowBar}) => {

  return (
    <AnimatePresence style={{ width: '40vw' }}>
      {showBar ? (
        <a.div
          key="barOn"
          style={{
            width: "30vw",
            backgroundColor: "black",
            boxShadow: "7px 5px 3px black",
            paddingTop:'100px'
          }}
          variants={barVariants}
          initial="initialOn"
          animate="animate"
          exit="exit"
          whileHover="hover"
        >
          <a.div
            style={{
              paddingLeft: "23vw",
              cursor: "pointer",
              height: "40px",
            }}
            variants={barVariants}
          >
            <FontAwesomeIcon
              style={{
                cursor: "pointer",
                height: "50px",
                color: "white",
              }}
              onClick={() => setShowBar(!showBar)}
              icon={faAngleLeft}
              size="2x "
            />
          </a.div>
          <a.div
            style={{ margin: "30px", height: "100vh" }}
            variants={barVariants}
          >
            {NavBar.map((x) => {
              return (
                <a.p
                  variants={barVariants}
                  whileHover={"onHover"}
                  style={{ marginTop: "50px", height: "40px" }}
                  id={x.id}
                >
                  <Link
                    style={{ display:'flex', justifyContent:'center' , paddingTop: "10px", paddingRight:'20px' }}
                    to={x.link}
                  >
                    <a.p variants={barVariants} whileHover={"onHoverText"}>
                      {x.name}
                    </a.p>
                  </Link>
                </a.p>
              );
            })}
          </a.div>
        </a.div>
      ) : (
        <a.div
          style={{
            width: "9vw",
            backgroundColor: "black",
            boxShadow: "5px 5px 2px black",
            paddingTop:'100px'
          }}
          variants={barVariants}
          initial="initialOff"
          animate="animate"
          exit="exit"
          key="barOff"
          whileHover="hover"
        >
          <div
            style={{
              paddingLeft: "3vw",
              cursor: "pointer",
              height: "40px",
            }}
          >
            <FontAwesomeIcon
              style={{
                cursor: "pointer",
                height: "50px",
              }}
              onClick={() => setShowBar(!showBar)}
              icon={faAngleRight}
              size="2x "
              color="white"
            />
          </div>
          <div style={{ margin: "20px", height: "100vh", paddingTop:'20px' }}>
            {icons.map((x) => {
              return (
                <Link to={x.link}>
                  <a.p
                    variants={barVariants}
                    whileHover={{
                      originX: 0,
                      scale: 2,
                      // backgroundColor: "#f1f4f8",
                      // color: "black",
                      // text: "white"
                    }}
                    style={{ marginTop: "40px", height: "40px" }}
                    id={x.id}
                  >
                    <FontAwesomeIcon
                      style={{ PaddingTop: "50px" }}
                      icon={x.icon}
                      color="white"
                    ></FontAwesomeIcon>
                  </a.p>
                </Link>
              );
            })}
          </div>
        </a.div>
      )}
    </AnimatePresence>
  );
};

export default Bar;
