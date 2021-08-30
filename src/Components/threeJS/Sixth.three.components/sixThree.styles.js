import styled from 'styled-components'

export const SixHeaderInnerContainer = styled.div`
    position: relative;
    z-index: 99;
    /* width: 90vw; */
    padding: 10px;
    max-width:90vw;

    .header-inner {
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo {
      font-weight: 900;
      letter-spacing: 2px;
      /* color: #fff; */
      font-size:3rem;
    }

    nav {
      ul {
        margin: 0;
        padding: 0;
        display: flex;

        li {
          list-style: none;
          margin: 3vw;

          &.btn {
            a {
              color: #fff;
              font-weight: 600;
              background: #23232a;
              padding: 16px 24px;
              border-radius: 10px;
            }
          }

          a {
            text-transform: capitalize;
            text-decoration: none;
            /* color: ${(document.body.style.background === '#f1f4f8')?'black':"#fff"} */
            color: black;
          }
        }
      }
    }
  

`

export const SixContainerDiv = styled.div`
    margin: 0;
    /* width: 80vw; */
    /* max-width: 100vw; */
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;

`

export const SixTitleDiv = styled.div`
    font-size: 3rem;
    text-align: center;
    width: 350px;
    /* margin: 0 auto; */
    /* color: #fff; */
    font-weight:bold;
    position:absolute;
    /* margin-left:  -100%; */
    /* padding-left:50%; */
    span {
        display: block;
    }
    @media (max-width: 650px) {
        font-size: 2rem;
    }
`

export const SixLoadingContainer = styled.div`

    .loading {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: #171717;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
    
    .loading-bar-container {
        width: 100px;
        height: 32px;
        background: #272727;
    }
    
    .loading-bar {
        height: 32px;
        background: #f15946;
    }

`