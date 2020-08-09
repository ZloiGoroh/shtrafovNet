import React from 'react';
import './css/loading.css';

function Loading(){


    return(
        <div className="loader">
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="text">
                Загрузка
            </div>
        </div>
    )
}

export default Loading;