import React, {useEffect, useState} from "react";
import {
  SectionsStyled,
  HeaderStyled,
  MainStyled,
} from "./pageTransition.Components.styles";

import {
  // BrowserRouter,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";

import { 
    AnimatePresence, 
    motion ,
    useViewportScroll,
    useTransform
} from "framer-motion";

import ProgressiveImage from "react-progressive-image";

import src from './images/file_example_WEBP_1500kB.webp'
import srcCompressed from './images/file_example_WEBP_1500kB.jpg'

const Header = () => {
  return (
    <HeaderStyled>
      <div className="containerH">
        <div className="rowH space-between">
          <div className="logoH">
            <Link to="/">Page Transition One</Link>
          </div>
          <div className="menuH">MENU</div>
        </div>
      </div>
    </HeaderStyled>
  );
};

const Home = ({ imageDetails, image }) => {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <MainStyled>
      <div className="containerM">
        <div className="rowM">
          <div className="image-containerM">
            <div
              className="thumbnailM"
              ref={image}

            >
              <div className="frameM">
                <Link to={"/1"}>
                  <ProgressiveImage
                    src={src}
                    placeholder={srcCompressed}
                  >
                    {(src) => (
                      <motion.img
                        src={src}
                        alt="IMG"
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>

            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className="informationM"
            >
              <div className="titleM">Transition Page 1</div>
              <div className="locationM">
                <span>🔥 </span>
                <span> </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MainStyled>
  );
};


const ScrollForMore = () => {

    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

    return (

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.2, ...transition },
        }}
        className='scroll-for-more'>

        <div className='iconSroll'>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='23.539'
            height='29.985'
            viewBox='0 0 23.539 29.985'>
            <g id='down-arrow' transform='translate(-67.666 0.6)'>
              <g id='Group_1' data-name='Group 1' transform='translate(68.266)'>
                <path
                  id='Path_1'
                  data-name='Path 1'
                  d='M90.452,18.153l-2.9-2.664a.528.528,0,0,0-.71,0L81.974,20V.48A.5.5,0,0,0,81.466,0H77.4A.5.5,0,0,0,76.9.48V20l-4.872-4.515a.529.529,0,0,0-.709,0l-2.9,2.664a.46.46,0,0,0,0,.687l10.662,9.81a.528.528,0,0,0,.708,0l10.662-9.81a.461.461,0,0,0,0-.687Z'
                  transform='translate(-68.266)'
                  fill='none'
                  stroke='#fff'
                  stroke-width='1.2'
                />
              </g>
            </g>
          </svg>
        </div>

        <div className='textSroll'>
          Scroll <br />
          for more
        </div>

      </motion.div>
    );
  };

const Model = ({imageDetails}) => {

    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

    const firstName = {
        initial: {
          y: 0,
        },
        animate: {
          y: 0,
          transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
          },
        },
    };
      
    const lastName = {
        initial: {
          y: 0,
        },
        animate: {
          y: 0,
          transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
          },
        },
    };
      
    const letter = {
        initial: {
          y: 400,
        },
        animate: {
          y: 0,
          transition: { duration: 1, ...transition },
        },
    };

    const { scrollYProgress } = useViewportScroll();

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        if (canScroll === false) {
        document.querySelector("body").classList.add("no-scroll");
        } else {
        document.querySelector("body").classList.remove("no-scroll");
        }
    }, [canScroll]);

    return(
        <motion.div
        onAnimationComplete={() => setCanScroll(true)}
        className='singleSingle'
        initial='initial'
        animate='animate'
        exit='exit'>
        <div className='containerSingle fluid'>
            <div className='rowSingle center top-row'>
            <div className='top'>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.2, ...transition },
                }}
                className='detailsSingle'>
                <div className='locationSingle'>
                    <span>28.538336</span>
                    <span>-81.379234</span>
                </div>
                <div className='muaSingle'>MUA: @mylifeascrystall</div>
                </motion.div>
                <motion.div className='model'>
                <motion.span className='firstSingle' variants={firstName}>
                    <motion.span variants={letter}>T</motion.span>
                    <motion.span variants={letter}>H</motion.span>
                    <motion.span variants={letter}>I</motion.span>
                    <motion.span variants={letter}>S</motion.span>
                    <motion.span variants={letter}>-</motion.span>
                    <motion.span variants={letter}>I</motion.span>
                    <motion.span variants={letter}>S</motion.span>
                    <motion.span variants={letter}>-</motion.span>
                </motion.span>
                <motion.span className='lastSingle' variants={lastName}>
                    <motion.span variants={letter}>T</motion.span>
                    <motion.span variants={letter}>R</motion.span>
                    <motion.span variants={letter}>A</motion.span>
                    <motion.span variants={letter}>N</motion.span>
                    <motion.span variants={letter}>S</motion.span>
                </motion.span>
                </motion.div>
            </div>
            </div>
            <div className='row bottom-rowSingle'>
            <div className='bottomSingle'>
                <motion.div className='image-container-singleSingle'>
                <motion.div
                    initial={{
                    y: "-20%",
                    width: 2,
                    height: 2,
                    }}
                    animate={{
                    y: '-10%',
                    width: "100%",
                    height: window.innerWidth > 1440 ? 800 : 400,
                    transition: { delay: 0.2, ...transition },
                    }}
                    className='thumbnail-singleSingle'>
                    <motion.div
                    className='frame-singleSingle'
                    whileHover='hover'
                    transition={transition}>
                    <motion.img
                        src={src}
                        alt='an image'
                        style={{ scale: scale }}
                        initial={{ scale: 1.0 }}
                        animate={{
                        transition: { delay: 0.2, ...transition },
                        y: window.innerWidth > 1440 ? -1200 : -600,
                        }}
                    />
                    </motion.div>
                </motion.div>
                </motion.div>
            </div>
            <ScrollForMore />
            </div>
        </div>
        <div className='detailed-informationSingle'>
            <div className='containerSingle'>
            <div className='rowSingle'>
                <h2 className='titleSingle'>
                The insiration behind the artwork & <br /> what it means.
                </h2>
                <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one of
                the more obscure Latin words, consectetur, from a Lorem Ipsum
                passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes
                from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                BC. This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
            </div>
            </div>
        </div>
    </motion.div>
    )
}

const PageTransitionOne = () => {
  const imageDetails = {
    width: 20,
    height: 20,
  };

  return (
    <SectionsStyled>
      <Header />
      <Route
        render={({ location }) => (
            <AnimatePresence 
                initial={false}
                exitBeforeEnter
            >
                <Switch location={location} key={location.pathname}>
                    <Route
                    exact
                    path="/"
                    render={() => <Home imageDetails={imageDetails} />}
                    />
                    <Route
                    
                    path="/1"
                    >
                      <Model 
                        imageDetails={imageDetails}
                      />
                    </Route>
                </Switch>
            </AnimatePresence>
        )}
      ></Route>
    </SectionsStyled>
  );
};

export default withRouter(PageTransitionOne)
