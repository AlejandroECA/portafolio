import React, {createContext,useContext} from 'react';

export const CustomVariablesContext = createContext({
    iconImg:`/Users/alejandrocarrillo/Documents/Projects/Portafolio/portafolio/public/—Pngtree—isometric p letter p vector_3985174.png`,
    titlePage:'Portfolio',
    headerNav:[
        {
          id: 1,
          name: "Home",
          link: "/",
        },
        {
          id: 2,
          name: "Projects",
          link: "/",
        },
        {
          id: 3,
          name: "About",
          link: "/",
        },
    ],
    backgroundImage:
        "https://wallpapercave.com/wp/wp3194577.jpg",
    fontColor:'white',
    cardsInfo:[
        {
        'cardImg':'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'cardAlt':'imgCard1',
        'id' : '1',
        'cardTitle':'title1',
        'cardSubTitle':'subtitle1',
        'cardText':
      
          `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'`,
      
        'cardButton':'button1'
        },
      
        {
          'cardImg':'https://images.unsplash.com/photo-1585468491047-f02d6f7c706c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80',
          'cardAlt':'imgCard1',
          'id' : '2',
          'cardTitle':'title2',
          'cardSubTitle':'subtitle2',
          'cardText':
      
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'`,
      
          'cardButton':'button2'
        },
      
        {
          'cardImg':'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          'cardAlt':'imgCard3',
          'id' : '3',
          'cardTitle':'title3',
          'cardSubTitle':'subtitle3',
      
          'cardText':
          
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'`,
      
          'cardButton':'button3'
        }
    ],
    titleForHeader: "Portfolio",
    imageHeaderSource:"",
    cardsSubTitleColor:{
      R:'0',
      G:'0',
      B:'0',
      P:'0.5'
    },
    cardsTextColor:{
      R:'0',
      G:'255',
      B:'150',
      P:'0.8'
    },
    cardsButtonColor:{
      R:'50',
      G:'255',
      B:'150',
      P:'1'
    },


});

const CustomVariablesProvider = ({children}) => {

    //any function to changue value
    const {
        headerNav,
        backgroundHeaderImage,
        fontColor,
        cardsInfo,
        titleForHeader,
        imageHeaderSource,
        cardsSubTitleColor,
        cardsTextColor,
        cardsButtonColor,
        iconImg,
        titlePage
    
    } = useContext(CustomVariablesContext)



    return(
        <CustomVariablesContext.Provider value={
            {
                headerNav,
                backgroundHeaderImage,
                fontColor,
                cardsInfo,
                titleForHeader,
                imageHeaderSource,        
                cardsSubTitleColor,
                cardsTextColor,
                cardsButtonColor,
                iconImg,
                titlePage
            }
        }>

            {children}

        </CustomVariablesContext.Provider>
    )

}

export default CustomVariablesProvider