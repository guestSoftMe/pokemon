import React from "react";
import axios from "axios";

const initialState = {
    pokemonsAll: [],
    currentPage: 1,
    fetching: true
}

export function reduserPokemon(state = initialState, action) {
    switch (action.type) {
        case 'POKEMON':
            return {...state, pokemonsAll: action.poke}
        case 'FATCHING':
            return {...state, fetching: action.fet}
        default:
            return state
    }
}

let pokemonAdd = (poke) => ({type: 'POKEMON', poke})
export let fetchingAdd = (fet) => ({type: 'FATCHING', fet})

export const pokemonThunk = (offset) => (dispatch) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=25&limit=${offset}`)
        .then(data => {
            dispatch(pokemonAdd(data.data.results))
        })
        .finally(()=>{
            dispatch(fetchingAdd(false))
    })
}
