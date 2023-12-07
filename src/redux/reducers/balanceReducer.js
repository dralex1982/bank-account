import {depositAction, withdrawAction} from "../actions/accountActions";
import {createReducer} from "@reduxjs/toolkit";

const initialBalance = 10000;

// Builder callback notation
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

export default balanceReducer;