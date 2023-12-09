import {createAsyncThunk} from "@reduxjs/toolkit";
import data from "bootstrap/js/src/dom/data";

export const getQuoteAction =
    createAsyncThunk('quote/fetchQuote', ()=>
    {
        return fetch('https://api.kanye.rest/')
            .then(response => response.json())
            .then(data => data.quote)
    })

// export const getQuoteAction = () => {
//     return dispatch => {
//         dispatch(quoteRequest('Loading.......'));
//         fetch('https://api.kanye.rest/')
//             .then(response => response.json())
//             .then(data => dispatch(putQuote(data.quote)))
//             .catch(error=> dispatch(errorQuote('Error 404' + error.message)))
//     }
// }