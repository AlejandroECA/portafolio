import React from 'react';
import HeaderComponent from '../Components/header/Header-component'
// import CardsHome from "../Components/Cards/cards-component"
// import FirstThree from './../Components/threeJS/firstThree'
// import SecondThree from '../Components/threeJS/secondThree';
import ThirdThree from '../Components/threeJS/1-4 three.component/thirdThree';
import FourthThree from '../Components/threeJS/1-4 three.component/fourthThree'
import FifthThree from '../Components/threeJS/Fifth.three.components/fifthThree'
import SixThree from '../Components/threeJS/Sixth.three.components/sixThree'
import PageTransitionOne from '../Components/PageTransition.Components/one/pageTransitionOne.Component'
import TransitionTwo from '../Components/PageTransition.Components/two/transitionTwo'

import {BrowserRouter,withRouter} from 'react-router-dom'

const HomePage = () => {


  //I removed the thirdThree - Dom mistake in router

  return (
    <React.Fragment>

    <BrowserRouter>



      
      <HeaderComponent/>
      <FourthThree />
      <FifthThree />
      <SixThree />
      <PageTransitionOne />
      <TransitionTwo />

    </BrowserRouter>

    </React.Fragment>
  );
};

export default HomePage;
