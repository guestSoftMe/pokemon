import React, {useState} from 'react'
import {NavLink} from "react-router-dom";


function Form() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const submit = (e) => {
        e.preventDefault()
    }

    return(
        <div>
            <form onSubmit={submit} className='form'>
                <img src={'https://www.begin-it.com/media-content//blog/an-appeal-to-everyone-please-stop-pronouncing-pokmon-wrong-1.png'} alt=""/>
                <label>Login</label>
                <div style={{margin:'15px'}}><input onChange={e => setLogin(e.target.value)} type="text"/></div>
                <label>Password</label>
                <div><input onChange={e => setPassword(e.target.value)} type="text"/></div>
                {login === 'Pokemon' && password === '9606572' ? <NavLink to={'/pokemon'} className="submit" >Send</NavLink> : <button disabled>Send</button>}
            </form>
        </div>
    )
}

export default Form
