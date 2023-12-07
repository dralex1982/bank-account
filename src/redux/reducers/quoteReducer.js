import {errorQuoteAction, putQuoteAction, quoteRequestAction} from "../actions/quoteAction";
import {createReducer} from "@reduxjs/toolkit";

const initialQuote = 'He-he-he...';

// Builder callback notation
const quoteReducer =
    createReducer(initialQuote, builder =>
    {
        builder
            .addCase(putQuoteAction, (quote, action) =>
            {
                return action.payload
            })
            .addCase(errorQuoteAction, (quote, action) =>
            {
                return action.payload
            })
            .addCase(quoteRequestAction, (quote, action) =>
            {
                return action.payload
            })
    })

export default quoteReducer;