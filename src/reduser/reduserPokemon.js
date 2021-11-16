import React from "react";
import axios from "axios";
import {pokemon_link} from "../Constants/Constants";

const initialState = {
    pokemonsAll: [],
    currentPage: 1,
    fetching: true,
    loader: false
}

export function reduserPokemon(state = initialState, action) {
    switch (action.type) {
        case 'POKEMON':
            return {...state, pokemonsAll: action.poke}
        case 'FATCHING':
            return {...state, fetching: action.fet}
        case 'LOADER':
            return {...state, loader: action.loade}
        default:
            return state
    }
}

let pokemonAdd = (poke) => ({type: 'POKEMON', poke})
export let fetchingAdd = (fet) => ({type: 'FATCHING', fet})
export let loaders = (loade) => ({type: 'LOADER', loade})

export const pokemonThunk = (offset) => (dispatch) => {
    axios.get(pokemon_link(offset))
        .then(data => {
            dispatch(pokemonAdd(data.data.results))
            dispatch(loaders(true))
        })
        .finally(() => {
            dispatch(fetchingAdd(false))
        })
}
