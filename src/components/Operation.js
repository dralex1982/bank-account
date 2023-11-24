import React, {useState} from 'react';
import store from "../redux/storeConfiguration";
import {depositAction, withdrawAction} from "../redux/accountActions";

const Operation = () => {
    const [sum,setSum] = useState(1);
    return (
        <div>
            <button onClick={()=> store.dispatch(withdrawAction(sum))}>Withdraw</button>
            <input type={'number'} min={0}
                   onChange={e=> setSum(+e.target.value)} value={sum}/>
            <button onClick={() => store.dispatch(depositAction(sum))}>Deposit</button>
        </div>
    );
};

export default Operation;