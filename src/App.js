import './App.css';
import React from "react";
import Pokemon from "./component/pokemon";
import Form from "./component/Form";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Info from "./component/infoPokemon";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path={'/'} component={Form}/>
                    <Route exact path={`/pokemon/`} component={Pokemon}/>
                    <Route path={`/pokemon/`} render={()=><Info/>}/>
                    <Route  path='*' render={() => <div>404 page not found</div>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
