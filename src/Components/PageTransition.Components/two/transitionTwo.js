import React,{useState} from 'react';
import monkeySrc from './android-chrome-512x512.png'
import {
    DivHeaderContainer,
    TransitionContainerStyled,
    HomeContainer,
    PrimaContainer,
    SecondaContainer,
    TerzaContainer,

} from './transition.Two.styles'
import { Switch, Route , withRouter,Link} from 'react-router-dom'
import { motion as a,transform } from 'framer-motion';

const containerVariants ={ 
    hidden:{
        x:'100vw',
        opacity:0,
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            delay:1,
            duration:1
        }
    }
}


const Header = () => {
    return(

        <DivHeaderContainer>

            <div className="logo">
                <img 
                src={monkeySrc} 
                alt='monkey'  
                size='30%'  
                />
            </div>



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

        </DivHeaderContainer>
    )
}

const Home =()=>{
    return(
        <HomeContainer
        >
            <a.h2 
                className="title"
                animate='visible'  
                initial='hidden'
                variants={containerVariants}
            >
            🌴 Welcome to the Jungle 🌴 
            </a.h2>

            <div className="button">

            <MoveButton 
                moveTo='/1Dot1'
                caption='Next'
            />

            </div>
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
            >

                {jungle.animal.map(animal => {
                    return(
                        <a.div
                        animate={{
                            x:0
                        }}
                        initial={{
                            x:'250vw'
                        }}
                        transition={{
                            // duration:1,
                            delay:0.1,
                            type:'spring',
                            stiffness:120,
                        }}
                        className="contentComp"
                        >{animal}</a.div>)
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

const Terza = ({jungle,setJungle}) => {
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
        <h2 className="title">Jungle :)</h2>
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



const TransitionTwo = () => {

    const [jungle, setJungle] = useState({ terrain: "", animal: [] });


    return(
        <TransitionContainerStyled >
            <Header />
            <div className="content">
                <Switch>
                    <Route  exact path="/" component={Home}/>
                    <Route  path="/1Dot1"> <Prima jungle={jungle} setJungle={setJungle} /> </Route>
                    <Route  path="/2"> <Seconda jungle={jungle} setJungle={setJungle} /> </Route>
                    <Route  path="/3"> <Terza jungle={jungle} setJungle={setJungle}/> </Route>
                </Switch>
            </div>
             
        </TransitionContainerStyled>
    )
}

export default withRouter(TransitionTwo)