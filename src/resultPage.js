import React from 'react';
import './css/result.css';

function Success(props){

    let date = '';
    let hasDiscount = '';
    let discount = 0;
    let price = 0;

    if (props.data.bill_at !== undefined){
        date = props.data.bill_at.slice(0,10);
    }
    
    if (props.data.discount_at === null){
        hasDiscount = 'Скидка отсутствует';

    } else {
        hasDiscount = props.discount_at;
        discount = props.discount_size;
    }
/*0356043010119111100023005*/
    if (parseFloat(props.data.payment_status) === 'paid'){
        price = props.data.amount_to_pay;
    } else {
        price = parseFloat(props.data.amount) - discount;
    }

    return (
        <div className="table">
            <h2>Постановление #{props.data.kbk}</h2>
            <div className="resultContainer">
            <div>Свидетельство о регистрации:</div> <div>{props.data.doc_number}</div>
            <div>Дата постановления:</div> <div>{date}</div>
            <div>Нарушение:</div> <div>{props.data.koap_code}</div>
            <div>Получатель платежа:</div> <div>{props.data.payee_username}</div>
            <div>ИНН:</div> <div>{props.data.payee_inn}</div>
            <div>КПП:</div> <div>{props.data.payee_kpp}</div>
            <div>Рассчётный счёт:</div> <div>{props.data.payee_bank_account}</div>
            <div>Банк Получателя:</div> <div>{props.data.payee_bank_name}</div>
            <div>БИК:</div> <div>{props.data.payee_bank_bik}</div>
            <div>ОКТМО(ОКАТО):</div> <div>{props.data.payee_oktmo}</div>
            <div>КБК:</div> <div>{props.data.kbk}</div>
            <div>Сумма штрафа:</div> <div>{props.data.amount}р</div>
            <div>Скидка:</div> <div>{hasDiscount}</div>
            <div>К оплате:</div> <div>{price}р</div>
            </div>
        </div>
    );
}

export default Success;