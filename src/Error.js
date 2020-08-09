import React from 'react';
import pic from './Group.svg';
import './css/error.css';

function Error(props){
    return(
        <div className="errorBlock">
            <div className="lensePic">
                <img src={pic} alt=""/>
            </div>
            <div>
                Штраф {props.number} не найден <br/>
                {props.number.length !== 20 && props.number.length !== 25 && 'Номер должен состоять из 20 или 25 символов'}
            </div>
        </div>
    )
}

export default Error;