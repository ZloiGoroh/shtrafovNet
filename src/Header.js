import React from 'react';
import './css/header.css';
import './css/index.css'
import logo from './logo.svg';

function Header(){
    return(
        <div>
            <div className="logo-block">
               <div className="logo">
                <img src={logo} alt=""/>
               </div>
               <span className="logo-text">
                    <span>штрафов</span> нет
                </span>
            </div>
        </div>
    );
}

export default Header;