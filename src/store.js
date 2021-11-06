import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {reduserPokemon} from "./reduser/reduserPokemon";
import thunk from "redux-thunk";


let reduser =  combineReducers( {
    pokeimage:reduserPokemon
})

export let store = createStore(reduser,applyMiddleware(thunk))
