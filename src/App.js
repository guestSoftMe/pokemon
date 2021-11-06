import './App.css';
import React from "react";
import Pokemon from "./components/pokemon";
import Form from "./components/Form";
import {Route, Switch} from "react-router-dom";
import Info from "./components/infoPokemon";
import 'antd/dist/antd.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'} component={Form}/>
                <Route exact path={`/pokemon/`} render={()=><Pokemon/>}/>
                <Route path={`/pokemon/`} render={() => <Info/>}/>
                <Route path='*' render={() => <div>404 page not found</div>}/>
            </Switch>
        </div>
    );
}

export default App
