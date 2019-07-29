import React, { Component } from 'react';

export default class Historial extends Component {

    state = {
        busquedas : []
    }

    componentDidMount(){
        this.traerBusquedas();
    }

    traerBusquedas = () => {
        let url = 'http://localhost/api/busquedas',
        req = new Request(url);
        fetch(req)
            .then( response => response.json())
            .then(busquedas => this.setState( { busquedas }))
    }

    render() {
        return (
            <div className='container'>
                <table className="table table-hover w-60">
                    <thead>
                        <tr className='thead-dark'>
                            <th scope="col">Termino</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.busquedas.map(item => {
                                return(
                                    <tr key={item.id}>
                                        <td> { item.busqueda } </td>
                                        <td> { item.fecha } </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
