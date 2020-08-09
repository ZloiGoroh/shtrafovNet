import React from 'react';
import './css/form.css';
import Success from './resultPage';
import Error from './Error';
import Loading from './Loading';
import Hint from './Hint';


const url = 'https://test-task.shtrafovnet.com/fines/';

function Search(){
    let [value, setValue] = React.useState('');
    let [render, setRender] = React.useState(0);
    let [data, setData] = React.useState({});
    let [input, setInput] = React.useState('');


    function output (inp){
        setRender(3);
        fetch(url + inp)
            .then((response) => {
                if (response.ok){
                    response.json().then((elem) => {
                            setRender(1);
                            setData(elem);
                    });
                } else {
                    setInput(inp);
                    setRender(2);
                }
            })
        setValue('');
    }

    return(
        <div>
            <div className="simpleText">Получение информации о штрафе по УИН</div>
            <div className="input-box">
                <input value={value} type="text" onChange={event => setValue(event.target.value)} placeholder="Введите УИН"/>
                <button onClick={() => output(value)}>Найти</button>
                {(value.length === 19 || value.length === 24) && <Hint value={value} onClick={output}/>}
            </div>
            {render === 1 && <Success data={data}/>}
            {render === 2 && <Error number={input}/>}
            {render === 3 && <Loading/>}
        </div>
    )
}

export default Search;