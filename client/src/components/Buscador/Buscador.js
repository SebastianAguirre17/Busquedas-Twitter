import React, { Component } from 'react';

export default class Buscador extends Component {
    
    constructor(){
        super();
        this.state = {
            statuses : {},
            termino : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.buscarTweet = this.buscarTweet.bind(this);
    }

    buscarTweet = e => {
        e.preventDefault();
        
    }

    handleChange = e =>{
        const { value } = e.target;
        this.setState({ termino : value });
    }

    render() {
        return (
            <div>
                <div className='container d-flex justify-content-center'>
                    <form className='w-50' method='POST' onSubmit={ this.buscarTweet }>
                        <div className="form-group">
                            <label>Tweet a buscar</label>
                            <input onChange={this.handleChange} type="text" name="input-buscador" id="input-buscador" className="form-control" placeholder="" aria-describedby="helpId"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
