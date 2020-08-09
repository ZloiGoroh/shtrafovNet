import React from 'react';
import './css/hint.css';

function Hint (props){
    function miracle(num){
        let sum = 0;
        for (let i = 0; i < num.length; ++i){
            if (!isNaN(num[i])){
                sum += ((i % 10) + 1) * parseInt(num[i]);
            } else {
                return null;
            }
        }
        if (sum % 11 === 10){
            sum = 0;
            for (let j = 0; j < num.length; ++j){
                if (!isNaN(num[j])){
                    sum += (((j + 2) % 10) + 1) * parseInt(num[j]);
                }
            }
            if (sum % 11 === 10){
                return 0;
            } else {
                return sum % 11;
            }
        } else {
            return sum % 11;
        }
    }

    let hint = "";

    if (miracle(props.value) !== null){
        hint = props.value + miracle(props.value);
    } else {
        return "";
    }
    return (
        <div className="hintInput" onClick={() => props.onClick(hint)}>
            {hint}
        </div>
    )
}

export default Hint
