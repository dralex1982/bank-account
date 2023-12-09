import React from 'react';
import {useSelector} from "react-redux";

const Balance = () => {
    const balance = useSelector(state => state.account.balance);
    const quote = useSelector(state => state.quote.text);
    return (
        <div>
            <h1 className={'text-center text-uppercase'}>Bank Hapoalim</h1>
            <h4 className={'text-center text-uppercase'}><q>{quote}</q></h4>
            <h3 className={'text-center text-uppercase'}>Balance = {balance}</h3>
        </div>
    );
};

export default Balance;