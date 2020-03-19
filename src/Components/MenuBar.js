import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class ModelContainer extends Component {
    render() {
        return (
            <div className='menuStyle'>
            <ul className='menubar list-group'>
                <Link to='/people'>
                <li className="list-group-item">
                    {'People'}
                </li>
                </Link>
                <Link to='/films'>
                <li className="list-group-item">
                    {'Films'}
                </li>
                </Link>
                <Link to='/starships'>
                <li className="list-group-item">
                    {'Starships'}
                </li>
                </Link>
                <Link to='/vechicles'>
                <li className="list-group-item">
                    {'Vehicles'}
                </li>
                </Link>
                <Link to='/species'>
                <li className="list-group-item">
                    {'Species'}
                </li>
                </Link>
                <Link to='/planets'>
                <li className="list-group-item">
                    {'Planets'}
                </li>
                </Link>
            </ul>
        </div>
        )
    }
}
