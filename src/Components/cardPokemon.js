import React from 'react'
import {NavLink, withRouter} from "react-router-dom";
import {Card} from "antd";
import {HeartTwoTone } from '@ant-design/icons';
import {img_link} from "../Constants/Constants";

function CardPokemon({history, card}) {
    function pokemonprofil() {
        history.push(`/pokemon/${card.name}`, {card})
        localStorage.setItem('pokemon', JSON.stringify(history.location.state.card))
    }

    return (
        <NavLink to={`/pokemon/${card.name}`}>
            <div onClick={pokemonprofil}>
                <Card title={card.name.toUpperCase()} style={{margin: '15px'}}>
                    <div key={card.id} className={'pokemonCard'}>
                        {img_link(card)}
                    </div>
                    <HeartTwoTone twoToneColor="#eb2f96" style={{fontSize:'15px'}}/>
                </Card>
            </div>
        </NavLink>
    )
}

export default withRouter(CardPokemon)
