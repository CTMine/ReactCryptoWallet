import axios from 'axios';
import { apiBaseURL } from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
} from './../Utils/ActionTypes';


export default function FetchCoinData() {
    return dispatch => {

        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`${apiBaseURL}/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,XRP,LTC&convert=USD&CMC_PRO_API_KEY=f8309043-2baf-4741-9797-9c5d78f3e53e`)
            .then(res => {
              //console.log('API call response:', res.data);
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data.data });                
            })
            .catch(err => {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
            });   

    }
}

