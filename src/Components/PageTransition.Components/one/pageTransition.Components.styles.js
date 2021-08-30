import styled, { keyframes } from 'styled-components'

const main = '#f0d8bb';
const white = '#ffffff';
const black = '#1e1f13';

const grain = keyframes`

    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    20% {
      transform: translate(-15%, 5%);
    }
    30% {
      transform: translate(7%, -25%);
    }
    40% {
      transform: translate(-5%, 25%);
    }
    50% {
      transform: translate(-15%, 10%);
    }
    60% {
      transform: translate(15%, 0%);
    }
    70% {
      transform: translate(0%, 15%);
    }
    80% {
      transform: translate(3%, 35%);
    }
    90% {
      transform: translate(-10%, 10%);
    }

`

export const SectionsStyled = styled.div`

    /* padding: 10px; */
    margin-top: 150px;
    background-color: ${main};
    color: ${black};  
    width:100vw;
    padding-top:50px;



    &:before{
        animation: ${grain} 8s steps(10) infinite;
        background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/paper-pattern.png");
        content: "";
        height: 300%;
        left: -50%;
        opacity: 0.3;
        position: fixed;
        top: -100%;
        width: 300%;

        z-index:-1
    }
    &.no-scroll {
        overflow-y: hidden;
    }

    .containerS {

        flex-grow: 1;
        margin: 0 auto;
        padding: 0 32px;
        position: relative;
        width: auto;
        height: 100%;

        &.fluid {
            width: 100%;
            max-width: 100%;
            padding: 0;
        }

        @media (min-width: 1024px) {
            max-width: 860px;
        }

        @media (min-width: 1216px) {
            max-width: 1052px;
        }

        @media (min-width: 1408px) {
            max-width: 1460px;
        }

        .rowS {

            display: flex;
            align-items: center;

            &.space-between {
            justify-content: space-between;
            }

            &.center {
            justify-content: center;
            }

        }
    }

    scroll-for-more {
        position: absolute;
        bottom: 200px;
        left: 200px;
        z-index: 20;
        .iconScroll {
            svg {
            height: auto;
            width: 28px;
            }
        }
        .textScroll {
            margin-top: 8px;
            color: $white;
            text-transform: uppercase;
        }
    }


    .single {
        .containerSingle {
            .top-rowSingle {
                height: 50vh;
                width: 100%;
                align-items: flex-end;
                .topSingle {
                padding-bottom: 40px;
                .detailsSingle {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .locationSingle {
                    span:nth-child(2) {
                        margin-left: 16px;
                    }
                    }
                    .muaSingle {
                    text-transform: uppercase;
                    }
                }
                .modelSingle {
                    overflow: hidden;
                    .firstSingle {
                    margin-right: 72px;
                    }
                    span {
                    display: inline-block;
                    position: relative;
                    font-weight: 400;
                    font-size: 224px;
                    font-family: "Maragsa";
                    @media (max-width: 1440px) {
                        font-size: 128px;
                    }
                    }
                }
                }
            }
            .bottom-rowSingle {
                height: 50vh;
                position: relative;
                .bottomSingle {
                height: 100%;
                width: 100%;

                    .thumbnail-singleSingle {
                        width: 100%;
                        height: 800px;
                        margin: 0 auto;
                        overflow: hidden;
                        position: absolute;
                        left: 0;
                        right: 0;
                        .frame-singleSingle {
                            img {
                                position: absolute;
                                width: 100%;
                            }
                        }
                    }
                }
                .scroll-for-moreSingle {
                position: absolute;
                bottom: 200px;
                left: 200px;
                z-index: 20;
                    .iconSingle {
                        svg {
                        height: auto;
                        width: 28px;
                        }
                    }
                    .textSingle {
                        margin-top: 8px;
                        color: $white;
                        text-transform: uppercase;
                    }
                }
            }
        }

    }
    
    .detailed-informationSingle {
        margin-top: 200px;
        height: 600px;
        .containerSingle {
        .rowSingle {
            justify-content: space-between;
            align-items: flex-start;
            h2 {
            font-size: 28px;
            }
            p {
            font-family: "Helvetica Neue";
            font-size: 16;
            line-height: 28px;
            font-weight: 400;
            width: 800px;
            }
        }
        }
  }

`

export const HeaderStyled = styled.header`

    font-size: 16px;
    /* position: fixed; */
    width: 100%;
    font-weight: "700";

    .containerH {

        .rowH {  

            width: 100vw;
            height: 100%;

            .logoH {

                margin-top:0px;
                margin-left:50px;
                text-transform: uppercase;
                font-size:1.5rem;
                text-shadow: 2px 2px ${white};

                z-index:999;

                a {

                color: ${black};
                /* text-decoration: none; */

                }
            }

            .menuH {
                cursor: pointer;
                /* border-radius: 100%; */
                /* border: 1px solid ${black}; */
                height: 80px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.3s ease-in-out;

                /* margin-top:-30px; */
                /* padding-left:90%; */

                &:hover {
                    color: ${white};
                    background: ${black};
                }
            }
        }
    } 
`

export const MainStyled = styled.div`

    .containerM {
        position: relative;
        .rowM {
            height: 70vh;
            width:100vw;
            display: flex;
            align-items: center;
            padding-left:20%;
        .image-containerM {
            position: relative;
        .thumbnailM {
            overflow: hidden;
            position: relative;
            width:100%;
            align-items:center;

            .frameM {
                img {
                width: 60vw;
                
                }
            }
        }

        .informationM {
          position: absolute;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
          text-transform: uppercase;
          .locationM {
            span:nth-child(2) {
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
`


