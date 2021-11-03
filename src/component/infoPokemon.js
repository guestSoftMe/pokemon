import React from 'react'

function Info() {
    const pagepokemon = JSON.parse(localStorage.getItem('pokemon'))
    return (
        <div>
            <div style={{fontSize: '130px'}}>{pagepokemon.name}</div>
            <img className='imgsize' src={`https://img.pokemondb.net/artwork/large/${pagepokemon.name}.jpg`} alt=""/>
        </div>
    )
}

export default Info
