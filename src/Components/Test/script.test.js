
import {googleSearch, getPokemons} from './functionsToTest';

import React from 'react';

import { shallow , mount, render } from 'enzyme'

import FouthThree from '../threeJS/fourthThree';

const dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

describe('googleSearch', () => {

    it('this is a test',()=>{
        expect('hello').toBe('hello')
    })

    it('is searching ?', ()=>{
    expect(googleSearch(dbMock,'testtest')).toEqual([])
    expect(googleSearch(dbMock,'dog')).toEqual(['dog.com','dogpictures.com'])
    })

    it('work w undefined and null input', ()=>{
        expect(googleSearch(dbMock,undefined)).toEqual([])
        expect(googleSearch(dbMock,null)).toEqual([])
    })

    it('does not return more than 3 matches', ()=>{
        expect(googleSearch(dbMock,'.com').length).toEqual(3)
    })

})

describe('getPokemon', () => {

    it('call get pokemon', async () => {
        const data = await getPokemons()
        expect(data.count).toBeDefined
        expect(data.count).toEqual(1118)
    })


})


// describe('FourthThree', () => {

//     it('expect to render', ()=>{
//         expect(shalow(<FouthThree />).length).toEqual(1)
//     })
// })

