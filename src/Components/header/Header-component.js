import React,{useContext} from "react";
import {HeaderContainer,MenuHeader,HeaderImagContainer,HeaderImag,HeaderTitle} from './header.styles'
import {Link} from 'react-router-dom'
import { CustomVariablesContext } from './../../Providers/customVariables-Provider'


const HeaderComponent = () => {

  const {headerNav,imageHeaderSource,titleForHeader} = useContext(CustomVariablesContext)

  return (
    <HeaderContainer>
      {
        (imageHeaderSource)?(
          <HeaderImagContainer >
            <HeaderImag alt="header" src={`${imageHeaderSource}`} />
          </HeaderImagContainer>
          ):(<div></div>)
      }
      <HeaderTitle >
        <h1>{titleForHeader}</h1>
      </HeaderTitle>
      
      <MenuHeader>
        {headerNav.map( x => {
          return(
          <Link key={x.id} to={x.link}>
            {x.name}{'\t'}
          </Link>
          )
        })}
      </MenuHeader>
    </HeaderContainer>
  );
};

export default HeaderComponent;

