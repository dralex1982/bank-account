import React, {useState} from 'react';
import {number} from "prop-types";

const Operation = ({deposit, withdraw}) => {
    const [sum,setSum] = useState(1);
    return (
        <div>
            <button onClick={()=> withdraw(sum)}>Withdraw</button>
            <input type={'number'} min={0}
                   onChange={e=> setSum(+e.target.value)} value={sum}/>
            <button onClick={() => deposit(sum)}>Deposit</button>
        </div>
    );
};

export default Operation;