import React from 'react'
import {NavLink, withRouter} from "react-router-dom";

function Card({history, card}) {
    function pokemonprofil() {
        history.push(`/pokemon/${card.name}`, {card})
        localStorage.setItem('pokemon',JSON.stringify(history.location.state.card))
    }

    return (
        <div onClick={pokemonprofil}>
            <div key={card.id} className={'pokemonCard'}>
                <NavLink to={`/pokemon/${card.name}`}>
                    <img src={`https://img.pokemondb.net/artwork/large/${card.name}.jpg`} alt=""/>
                </NavLink>
            </div>
            <div className='pokemonName'>{card.name.toUpperCase()}</div>
        </div>
    )
}

export default withRouter(Card)
