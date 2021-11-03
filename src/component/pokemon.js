import React, {useEffect, useState} from 'react'
import Card from "./cardPokemon";
import loader from '../image/loader.gif'

function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [offset, setOffset] = useState(20);
    const [count, setCount] = useState(1);
    const [search, setSearch] = useState([]);
    const [disabPrev, setDisabPrev] = useState(false);
    const [disabNext, setDisabNext] = useState(false);
    const [datas, setDatas] = useState(false);

    useEffect(async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=24`)
        const data = await response.json()
        setDatas(true)
        setPokemon(data.results)
        setDatas(data.count)
        count === 1 ? setDisabPrev(true) : setDisabPrev(false)
        count === 55 ? setDisabNext(true) : setDisabNext(false)
    }, [offset])
    const filterCard = pokemon.filter(pokname => pokname.name.includes(search))

    return (
        <div>
            {datas
                ?
                <div>
                    <div className='searchInput'><input placeholder={'Search pokemon'} type="text"
                                                        onChange={(e) => setSearch(e.target.value)}/></div>
                    {search.length > 0 || <div className='count'>Страница: {count}</div>}
                    <div className='pokemonAllCard'>
                        {filterCard.map(card => {
                            return <Card
                                id={card.id} card={card} name={card.name}/>
                        })}
                    </div>
                    {search.length > 0 || <div className='btnPokemon'>
                        <button disabled={disabPrev} onClick={(r) => {
                            setOffset(offset - 20)
                            setCount(count - 1)
                        }}>Previous
                        </button>
                        <button disabled={disabNext} onClick={(r) => {
                            setOffset(offset + 20)
                            setCount(count + 1)
                        }}>Next
                        </button>
                    </div>} </div>
                : <img className='add' src={loader} alt=""/>
            }
        </div>
    )
}

export default Pokemon
