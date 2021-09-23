/** @jsxImportSource @emotion/react */

import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, withRouter, Link, useLocation } from "react-router-dom";
import { motion as a, AnimatePresence } from "framer-motion";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jsx, css } from "@emotion/react";
import styled from 'styled-components'
import { useSprings, animated } from 'react-spring'
import { useWheel } from '@use-gesture/react'
import DataTable, {createTheme} from 'react-data-table-component'
import { Bar } from 'react-chartjs-2';
import ProgressiveImage from "react-progressive-image";



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

export const ImgWithDelay = styled.img`

    animation: fadein 1.5s linear 1 normal forwards;
    overflow: hidden;
    max-height:35vw;
    width:100%;
    
    
    @keyframes fadein{
    from { opacity: 0; }
    to { opacity: 1; }
}

`

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
      <a.div 
      style={{ width: `${showBar ? "65vw" : "85vw"}` , border: "20px solid black", zIndex:'4', display:'flex'}}
      initial={{opacity:0}}
      animate={{opacity:1, transition:{duration:1}}}
      exit={{opacity:0, transition:{duration:1}}}
      >
        <ProgressiveImage 
            src={`${imgs[number]}`}
            placeholder="loading"
        >
        
        {  (src,loading )=> <ImgWithDelay
          src={src}
          alt=""
          key={number}
          style={{ opacity: loading ? 0.5 : 1 }}
        />}

        </ProgressiveImage>



    </a.div>

  );
};

// =======================

//fix styles
const DataToShow = () => {


    const columns = [
        { 
            name:'Title',
            selector: row => row.title,
            sortable:true,
        },
        { 
            name:'Year',
            selector: row => row.year,
            sortable:true

        }

    ]

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 3,
            title: 'Captain Marvel',
            year: '1995',
        },
        {
            id: 4,
            title: 'Black Panther',
            year: '2017',
        },
        {
            id: 5,
            title: 'Avengers: Infinity War',
            year: '2017',
        },
    ]

    // const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', 
            },
        },
        headCells: {
            style: {
                backgroundColor: 'black', 
                color: 'white',
                fontSize: '15px',
                fontWeight: 'bold',
                '&:focus': {
                    color: 'white',
                },
            },
        },
        headRow:{
            style: {
                '&:hover': {
                    color: 'white',
                },
                '&:hover:active': {
                    color: 'white',
                },
            }
        },
        cells: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        pagination: {
            style:{
                color:'white',
                backgroundColor: 'gray',
                borderTopColor: 'gray',
            },
            pageButtonsStyle: {
                color:'white',
                fill:'white'
            }
        },

    };

    // createTheme('solarized', {
    //     text: {
    //       primary: 'black',
    //       secondary: 'white',
    //     },
    //     background: {
    //       default: 'white',
    //     },
    //     context: {
    //       background: 'black',
    //       text: 'black',
    //     },
    //     divider: {
    //       default: 'black',
    //     },
    //     action: {
    //       button: 'rgba(0,0,0,.0)',
    //       hover: 'black',
    //       disabled: 'rgba(0,0,0,0)',
    //     },
    //   });


    return (
        <DataTable 
            title="Movies"
            columns={columns}
            data={data}
            selectableRows
            pagination
            // theme='solarized'
            customStyles={customStyles}
            // direction='auto'
            // fixedHeaderScrollHeight="300px"
            // responsive
            // subHeaderAlign="right"
            // subHeaderWrap
            // expandableRowsComponent={ExpandedComponent}
        />
    )
}

// =======================

const VerticalBar = () => {

    const dataBar = {
        labels: ['1988', '1984', '1995', '2017', '2019', '2020'],
        datasets: [
          {
            label: '# of Movies',
            data: [1, 1, 1, 2, 0, 0],
            // yAxisID:'number',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],      
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [{
            // id:'number',
            ticks: {
                precision:0,
                stepSize:1
              },
            }],
        },
      };


    return(
        <div style={{margin:'10px'}}>
            <div>
                Data Bar
            </div>
            <Bar 
                data={dataBar}
                options={options}
            />
        </div>
    )
}

const FirstTest = ({ showBar }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <a.div>
      <Slider imgs={imgs} showBar={showBar} />
      <div style={{ margin: '10px 0 10px 0'}}>
        <DataToShow />
        <VerticalBar />
      </div>
    </a.div>
  );
};

export default FirstTest;
