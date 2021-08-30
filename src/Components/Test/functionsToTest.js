import React from 'react';


const googleDataBase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavoritescats.com',
    'myfavoritescats2.com'
];

export const googleSearch = (DB,searchInput) => {
    const matches =  DB.filter( website => {
        return website.includes(searchInput)
    })
    return matches.length > 3? matches.slice(0,3): matches;
}

export const getPokemons = async() => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon')
    let pokemon = await response.json()


    return pokemon

}

