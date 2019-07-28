import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <Link className="navbar-brand text-white" to='Buscador'>
                Buscador de Tweets
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className='nav-link' to='Buscador'>Buscador</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='Historial' >Historial</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
