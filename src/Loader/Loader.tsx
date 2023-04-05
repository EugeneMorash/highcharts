import React from 'react';
import loader from './loader.gif'
import './loader.css'

export function Loader() {
    return (
        <div className='loader'>
            <h2>Loading...</h2>
            <img src={loader} alt="Loader"/>
        </div>
    );
}
