import React from "react";
export const img_link = (card)=>(<img src={`https://img.pokemondb.net/artwork/large/${card.name}.jpg`
    } alt=""/>
)
export const pokemon_link = (offset)=>`https://pokeapi.co/api/v2/pokemon/?offset=25&limit=${offset}`
export const logo_pokemon = (pokemon) =>(<img src={pokemon} alt=""/>)
