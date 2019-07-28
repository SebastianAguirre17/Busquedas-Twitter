import React, { Component } from 'react';
import { URL } from 'url';

export default class Buscador extends Component {
    
    state = {
        statuses : {}
    }

    buscarTweet = e => {
        e.preventDefault();
        let termino = (e.target.children[0].lastChild.value);
        this.callAPI();
    }

    callAPI() {
        fetch('http://localhost:9000/search')
            .then( res => res.json() )
            .then( res => { 
                this.mostrarResultados(res); 
            }) 
    }

    mostrarResultados = dato => {
        console.log(dato)
    }

    render() {
        return (
            <div>
                <div className='container d-flex justify-content-center'>
                    <form className='w-50' method='POST' onSubmit={ this.buscarTweet }>
                        <div className="form-group">
                            <label>Tweet a buscar</label>
                            <input type="text" name="input-buscador" id="input-buscador" className="form-control" placeholder="" aria-describedby="helpId"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
