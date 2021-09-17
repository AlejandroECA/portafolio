import React,{useState, useEffect} from 'react';
import monkeySrc from './android-chrome-512x512.png'
import {
    DivHeaderContainer,
    TransitionContainerStyled,
    HomeContainer,
    PrimaContainer,
    SecondaContainer,
    TerzaContainer,

} from './transition.Two.styles'
import { Switch, Route , withRouter,Link, useLocation} from 'react-router-dom'
import { motion as a, AnimatePresence, useCycle } from 'framer-motion';

const containerVariants ={ 
    hidden:{
        // x:'100vw',
        opacity:0,
    },
    visible:{
        opacity:1,
        // x:0,
        transition:{
            delay:0.4,
            duration:1
        }
    },
    exit:{
        // x:'-100vw',
        opacity:0,
        transition: { ease: 'easeInOut'},
        duration:1
    }
}

const headerVariants = {
    initial:{ rotate: -180},
    animate: {
        rotate:0,
        transition:{duration:1}
    }
}

const pathVariants = {
    initial:{ 
        opacity:0, 
        pathLength:0,
    },
    animate: {
        opacity: 1, 
        pathLength:1,
        transition:{ 
            duration:2,
            ease: 'easeInOut'
        }
    }

}


const Header = () => {
    return(

        <DivHeaderContainer>

            <a.div 
            className="logo">
                <a.img 
                drag
                dragConstraints={{left:0, top:0, right:0, bottom:0}}
                src={monkeySrc} 
                alt='monkey'  
                size='30%' 
                variants={headerVariants}
                animate='animate'
                initial='initial' 
                />

            </a.div>



            <a.div 
            className="title"
            animate={{
                y:0
            }}
            initial={{
                y:-250
            }}
            transition={{
                duration:1,
                delay:0.2,
                type:'spring',
                stiffness:120
            }}
            >
            2nd Transition 🔥
            </a.div>

            <svg
                fill='transparent'
                style={{
                    paddingTop:'50',
                    // paddingLeft:'100',
                    marginLeft:'100'
                }}
            >

                <a.path
                variants={pathVariants} 
                initial='initial' 
                animate='animate' 
                d= "M100 100 L 10 10 H 180 Z"
                strokeWidth='5'
                stroke='#00BFFF'

                />
                

            </svg>

        </DivHeaderContainer>
    )
}

const Home =()=>{
    return(
        <HomeContainer
        >
        <a.div
            variants={containerVariants}
            animate='visible'
            initial='hidden'
            exit="exit"
        >
            <a.h2 
                className="title"
            >
            🌴 Welcome to the Jungle 🌴 
            </a.h2>

            <div className="button">

            <MoveButton 
                moveTo='/1Dot1'
                caption='Next'
            />


            </div>

            <Loader/>


        </a.div>
        
        </HomeContainer>
    )
}

const Prima = ({jungle,setJungle}) =>{

    const addTerrain = (terrain) => {
        
        setJungle({ ...jungle, terrain })
    }

    const terrains = ['Desert', 'Mountains', 'Ocean', 'Island', 'Forest', 'River', 'Artic']


    return(
        <PrimaContainer>

        <a.div
        animate={{
            x:0
        }}
        initial={{
            x:'-5000vw'
        }}
        transition={{
            // duration:1,
            delay:0.2,
            type:'spring',
            stiffness:120
        }}
        exit={{ 
            x:'-100vw',
            transition: {ease: 'easeInOut'}
        }}
        >

        <h3 className="title">Step 1: Choose Terrain ⛰ </h3>

        <ul>
          {terrains.map(terrain => {

            let spanClass = jungle.terrain === terrain ? 'active' : '';

            return (
              <a.li
              whileHover={{
                originX:0,
                scale:2,
                color:'#00BFFF'
                }} 
                transition={{
                    // duration:1,
                    // delay:0.2,
                    type:'spring',
                    stiffness:300
                }}
              key={terrain} onClick={ () => addTerrain(terrain) }>
                <span className={spanClass}>{ terrain }</span>
              </a.li>
            )
          })}
        </ul>

        </a.div>

        <MoveButton 
        moveTo='./'
        caption='Back'
        />
  
        {jungle.terrain && (
          <a.div 
            animate={{
                x:0
            }}
            initial={{
                x:'-250vw'
            }}
            transition={{
                // duration:1,
                // delay:0.2,
                type:'spring',
                stiffness:120,
                when:'beforeChildren',
                mass:0.4, 
                damping:8,
            }}
            
          >

            <a.p className="contentComp"

            animate={{
                x:0
            }}
            initial={{
                x:'250vw'
            }}
            transition={{
                // duration:1,
                delay:0.2,
                type:'spring',
                stiffness:120,
            }}
            
            >{jungle.terrain}</a.p>


            <MoveButton 
            moveTo="/2"
            caption='Next'
            />

          </a.div>
        )}
  
      </PrimaContainer>
    )
}

const Seconda = ({jungle, setJungle}) =>{
    const animals = ['Dog', 'Cat', 'Tiger', 'Bear', 'Salmon', 'Eagle'];

    const addAnimal = (animal) => {
        let newAnimal;
        if(!jungle.animal.includes(animal)){
          newAnimal = [...jungle.animal, animal];
        } else {
          newAnimal = jungle.animal.filter(item => item !== animal);
        }
        setJungle({ ...jungle, animal: newAnimal });
    }
    return(
        <SecondaContainer>

        <a.div
        animate={{
            x:0
        }}
        initial={{
            x:'-5000vw'
        }}
        transition={{
            // duration:1,
            // delay:0.2,
            type:'spring',
            stiffness:120,
            when:'beforeChildren',
            mass:0.4, 
            damping:8,
        }}
        >
      
        <h3 className="title">Step 2: Choose Animal 👾 </h3>
        <ul>
          {animals.map(animal => {
            let spanClass = jungle.animal.includes(animal) ? 'active' : '';
            return (
              <a.li 
              whileHover={{
                originX:0,
                scale:2,
                color:'#00BFFF'
                }} 
                transition={{
                    // duration:1,
                    delay:0.2,
                    type:'spring',
                    stiffness:300
                }}
              key={animal} onClick={() => addAnimal(animal)}>
                <span className={spanClass}>{ animal }</span>
              </a.li>
            )
          })}
        </ul>
        </a.div>

        <MoveButton 
            moveTo='/1Dot1'
            caption='Back'
        />

        {jungle.animal!=''?(
            
            <a.div
            animate={{
                x:0
            }}
            initial={{
                x:'250vw'
            }}
            transition={{
                // duration:1,
                delay:0.2,
                type:'spring',
                stiffness:120,
            }}
            exit={{ 
                opacity:0, 
                duration:3
            }}
            >

                {jungle.animal.map(animal => {
                    return(
                            <a.div
                            exit={
                                {
                                    opacity:0, 
                                    duration:3
                                }
                            }  

                            animate={{
                                x:0
                            }}
                            initial={{
                                x:'250vw'
                            }}
                            transition={{
                                duration:1,
                                delay:0.1,
                                type:'spring',
                                stiffness:120,
                            }}

                            className="contentComp"

                            key={animal}

                            >{animal}</a.div>
                        )

                })}
        
                <MoveButton 
                moveTo='/3'
                caption='Next'
                />

            </a.div>
        ):null}
  
      </SecondaContainer>
    )
}

const backdrop ={ 
    hover:{
        opacity:1,
    },
    // visible:{opacity:0}, 
    hidden:{opacity:0},
    exit:{opacity:0}

}

const modal ={ 
    hidden:{
        y: '-100vh',
        opacity: 0
    },
    visible:{
        y:'200px', 
        opacity:1,
        transition:{delay:0.5}
    }


}

const Modal = ({showModal, setShowModal}) => {
    return(
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <a.div
                    style={{
                        // position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.5)',
                        visible:showModal

                    
                    }}
                    variants={backdrop}
                    // animate='visible'
                    initial='hidden'
                    whileHover='hover'
                    exit='exit'
                >
                    <a.div
                        style={{
                            y:50,
                            maxWidth:400,
                            // margin:0,
                            background:'white',
                            borderRadius:10,
                            textAlign:'center',
                            // margin:'auto',
                            margin:'auto',

                            paddingTop:'40px',

                            paddingBottom:'20px'
                        }}
                        variants={modal}
                        initial='hidden'
                        animate='visible'
                    >
                        <p
                            style={{
                                color:'#444',
                                fontWeight:'bold',
                            }}
                        >Let me see</p>
                        <Link to='./'>
                            <button
                                style={{
                                    color:'#444',
                                    fontWeight:'bold',
                                    borderColor:'#444',
                                    marginTop:20
                                }}
                                onClick={() => setShowModal(false)}
                            >Go GO...</button>
                        </Link>
                    </a.div>
                </a.div>
            )}
        </AnimatePresence>
    )
}

const Terza = ({jungle,setJungle}) => {

    const[showTitle,setShowTitle] = useState(true)
    setTimeout(()=> {
        setShowTitle(true)
    },4000);




    return(
        <TerzaContainer>

        <a.div
        animate={{
            opacity:1
        }}
        initial={{
            opacity:0
        }}
        transition={{
            duration:1,
            delay:0.2,
            // type:'spring',
            // stiffness:120
            staggerChildren:0.5
        }}
        >

            {showTitle && (<a.h2 
                exit={
                    {
                        opacity:0, 
                        duration:3
                    }
                }      
                className="title">Jungle :)</a.h2>)}
        
        <p>{jungle.terrain} environment with this animals:</p>
        {jungle.animal.map(animal => <div key={animal}>{animal}</div>)}


        <MoveButton 
            moveTo='./2'
            caption='Back'
        />

        <MoveButton 
            moveTo='./'
            caption='Reset'
            functionClick={()=>setJungle({terrain: "", animal: []})}
        />




        </a.div>

      </TerzaContainer>
    )
}

const buttonVariants = { 

    hover:{
        scale:1.2, 
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition:{ 
            duration:0.7,
            yoyo: Infinity,
        }
    },

}

const MoveButton = ({moveTo,caption,functionClick}) => {
    return(
        <Link to={moveTo}>
        <a.button 
            variants={buttonVariants}
            whileHover={'hover'}
            style={{marginRight:"20px"}}
            onClick={functionClick}
            
        >
            {caption}
        </a.button>
        </Link> 
    )
}

const loaderVariants = {
    animationOne:{
        x:[-20,20],
        y:[0,-30],
        transition: {
            x:{
                yoyo:Infinity,
                duration:0.5
            },
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease: 'easeOut'
            }
        }
    },
    animationTwo:{
        y:[0,-40],
        x:0,
        transition:{
            y:{
                yoyo:Infinity,
                duration:0.25,
                ease:'easeOut'
            }
        }
    }
}

const Loader =() =>{

    const [animation, cycleAnimation ] = useCycle('animationOne', 'animationTwo')

    return(
        <React.Fragment>
            <a.div
                style={{
                    width:'10px',
                    height:'10px',
                    // margin:'40px auto',
                    marginTop:'80px',
                    marginLeft:'28vw',
                    // paddingLeft:'50%vw',
                    borderRadius:'50%',
                    background:'white'
                }}

                variants={loaderVariants}
                animate={animation}
                
            >

            </a.div>
            <div style={{paddingLeft:'23.5vw', cursor:'pointer'}} onClick={() => cycleAnimation()}>Cycle Loader</div>
        </React.Fragment>
    )
}

const TransitionTwo = () => {

    const [jungle, setJungle] = useState({ terrain: "", animal: [] });
    const location = useLocation();
    // console.log(location);
    const[showModal,setShowModal] = useState(true)

    // useEffect(()=>{
    //     setTimeout(()=>{setShowModal(false)},5000)
    // })


    return(
        <TransitionContainerStyled >
            <Header />
            <Modal 
                showModal={showModal}
                setShowModal={setShowModal}
            >
        
            </Modal>

            {
                !showModal?

            <div className="content">
            <AnimatePresence 
                exitBeforeEnter 
                // onExitComplete={() => //anyfunction}
            >
                <Switch
                    lication={location}
                    key={location.key}
                >
                    <Route  exact path="/" component={Home}/>
                    <Route  path="/1Dot1"> <Prima jungle={jungle} setJungle={setJungle} /> </Route>
                    <Route  path="/2"> <Seconda jungle={jungle} setJungle={setJungle} /> </Route>
                    <Route  path="/3"> <Terza jungle={jungle} setJungle={setJungle} setShowModal={setShowModal} /> </Route>
                </Switch>
            </AnimatePresence>
            </div>:null
            }
             
        </TransitionContainerStyled>
    )
}

export default withRouter(TransitionTwo)