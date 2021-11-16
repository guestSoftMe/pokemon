import React, {useEffect, useState} from 'react'
import CardPokemon from "./cardPokemon";
import loader from '../image/loader.gif';
import pokemon from "../image/pokemon.png";
import {connect} from "react-redux";
import {fetchingAdd, pokemonThunk} from "../reduser/reduserPokemon";
import Header from "./Header";
import {logo_pokemon} from "../Constants/Constants";
import useScreen from "../Hooks/Hooks";


function Pokemon(props) {
    const screen = useScreen(window.innerWidth)
    const [offset, setOffset] = useState(null);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        if (props.fetching) {
            props.pokemonThunk(offset)
            setOffset(prev => prev + 10)
        }
    }, [props.fetching])
    useEffect(() => {
        document.addEventListener('scroll', scrollHeader)
        return () => {
            document.removeEventListener('scroll', scrollHeader)
        }
    }, [])

    function scrollHeader(e) {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            props.fetchingAdd(true)
        }
    }

    const filterCard = props.pokem.filter(pokname => pokname.name.includes(search))
    return (
        <div>
            {props.load ?
                <div>
                    <div className='logoimg'>
                        {logo_pokemon(pokemon)}
                    </div>
                    <Header setSearch={setSearch} search={search}/>
                    <div className='pokemonAllCard'>
                        {filterCard.map(card => {
                            return (
                                <CardPokemon key={card.id} id={card.id} card={card} name={card.name}/>
                            )
                        })}
                    </div>
                </div>
                : <img className='add' src={loader} alt=""/>
            }
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        pokem: state.pokeimage.pokemonsAll,
        current: state.pokeimage.currentPage,
        fetching: state.pokeimage.fetching,
        load: state.pokeimage.loader
    }
}

export default connect(mapStateToProps, {pokemonThunk, fetchingAdd})(Pokemon)
