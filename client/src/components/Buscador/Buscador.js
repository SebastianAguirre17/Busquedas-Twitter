import React, { Component } from 'react';
import uuid from 'uuid';

export default class Buscador extends Component {
    
    constructor(){
        super();
        this.state = {
            tweets : [],
            termino : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.buscarTweet = this.buscarTweet.bind(this);
    }

    buscarTweet = e => {
        e.preventDefault();
        fetch(`http://localhost/api/buscar/${this.state.termino}`)
            .then(response => response.json())
            .then(myJson => this.manejarTweets(myJson));
    }
    
    manejarTweets(listaDeTweets){
        this.setState({ tweets : listaDeTweets })
    }


    handleChange = e =>{
        const { value } = e.target;
        this.setState({ termino : value });
    }

    render() {
        return (
            <div>
                <div className='container d-flex justify-content-center'>
                    <form className='w-50' method='POST' id='formulario' onSubmit={ this.buscarTweet }>
                        <div className="form-group">
                            <label>Tweet a buscar</label>
                            <input onChange={this.handleChange} type="text" name="input-buscador" id="input-buscador" className="form-control" placeholder="" aria-describedby="helpId"/>
                        </div>
                    </form>
                </div>
                <div className='container'>
                    { this.state.tweets.map(tweet => {
                        return(
                            <div className='bg-white m-3 p-3 tweets w-100' key={uuid.v4()}>
                                <div className='d-flex align-items-center'>
                                    <figure>
                                        <img className='avatar' src='public/image.png' alt=''/>
                                    </figure>
                                    <span className='displayName'>usuario</span>
                                    <span className='username'>@unUsuario</span>
                                    <span className='date'>hace un minuto</span>
                                </div>
                                <p className='text-left'>{tweet}</p>
                                <div className='buttons'>
                                    <div className='icon'>
                                        <span className='fa fa-reply'></span>
                                        <span className='numero'>0</span>
                                    </div>
                                    <div>
                                        <span className='fa fa-retweet'></span>
                                        <span className='numero'>0</span>
                                    </div>
                                    
                                    <div>
                                        <span className='fa fa-star'></span>
                                        <span className='numero'>0</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
