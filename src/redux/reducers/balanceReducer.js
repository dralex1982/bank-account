import {depositAction, withdrawAction} from "../actions/accountActions";
import {createReducer} from "@reduxjs/toolkit";

const initialBalance = 10000;

//Map object notation
// const balanceReducer =
//     createReducer(initialBalance, {
//         [depositAction]: (state, action)=>{
//             state.balance += action.payload;
//         },
//         [withdrawAction]: (state, action)=>{
//             const res = balance - action.payload;
//             state.balance = res < 0 ? balance : res;
//         },
//     });

const balanceReducer =
    createReducer(initialBalance, builder => {
        builder
            .addCase(depositAction, (balance, action) =>
            {
               return  balance += action.payload;
            })
            .addCase(withdrawAction, (balance, action) =>
            {
                const res = balance - action.payload;
                return res < 0 ? balance : res;
            })
    })

// function balanceReducer(balance = initialBalance, action) {
//     switch (action.type) {
//         case depositAction.type:
//             return balance + action.payload;
//         case withdrawAction.type:
//             const res = balance - action.payload;
//             return res < 0 ? balance : res;
//         default:
//             return balance;
//     }
// }

export default balanceReducer;