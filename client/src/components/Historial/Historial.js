import React, { Component } from 'react';

export default class Historial extends Component {

    state = {
        busquedas : []
    }

    render() {
        return (
            <div>
                <table className="table tabla-dark table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Termino de busqueda</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}
