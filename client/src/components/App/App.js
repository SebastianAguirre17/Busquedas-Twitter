import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Buscador from '../Buscador/Buscador';
import Historial from '../Historial/Historial';


function App() {
    return (
        <BrowserRouter className="App">
            <div className='App'>
                <Header/>
                <Switch>
                    <Route path='/Buscador' exact render={ () => <Buscador /> }/>
                    <Route path='/historial' exact render={ () => <Historial /> }/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;