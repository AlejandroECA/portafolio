import React,{useContext} from 'react'
import HomePage from './Pages/homePage'
import { withRouter , Switch , Route}  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalStyle} from './AppGolbalStyles'
import CustomVariablesProvider from './Providers/customVariables-Provider';
import {CustomVariablesContext} from './Providers/customVariables-Provider'
import MenuInteractivePage from './Pages/menuInteractivePage'

function App() {

  // console.log(document.documentElement.clientWidth); 

  const {fontColor,backgroundImage,iconImg,titlePage} = useContext(CustomVariablesContext)

  const icon = document.getElementById('icon')
  const title = document.getElementById('title')
  icon.setAttribute('href',iconImg)
  title.textContent = titlePage

  return (
      <CustomVariablesProvider >
        <div>
          <GlobalStyle fontColor={fontColor} backgroundImage={backgroundImage}/>
          <Switch>
              <Route exact path='/' component={ HomePage } />
              <Route path='/menu' component={ MenuInteractivePage } />
          </Switch>
        </div>
      </CustomVariablesProvider>
  );
}

export default withRouter(App);
