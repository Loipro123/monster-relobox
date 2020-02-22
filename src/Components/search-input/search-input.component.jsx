import React from 'react';
import './search-input.styles.css';


export const Input = ({placeholder, handler}) => {
    return(
       <input className='search-input' type="search" placeholder={placeholder} onChange={handler}></input>
    );
};