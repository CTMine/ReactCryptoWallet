
import axios from 'axios';
import { apiBaseURL } from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';

/*
const rp = require('request-promise');

const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      start: 1,
      limit: 5000,
      convert: 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': 'f8309043-2baf-4741-9797-9c5d78f3e53e'
    },
    json: true,
    gzip: true
  };
*/
export default function FetchCoinData() {

    return dispatch => {

        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,XRP,LTC&convert=USD&CMC_PRO_API_KEY=f8309043-2baf-4741-9797-9c5d78f3e53e')
        .then(res => {
            console.log('API call response:', res.data);
            dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('API call error:', err.data);
            dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
        });

        /*
        return axios.get('/latehttps://pro-api.coinmarketcap.com/v1/cryptocurrency/listingsst', {
            params: {
              sort: 'market_cap',
              start: 0,
              limit:10,
              cryptocurrency_type: 'tokens',
              convert: 'USD,BTC'
            }
          },
          {
            headers: {
              'IX-CMC_PRO_API_KEY': 'f8309043-2baf-4741-9797-9c5d78f3e53e'
            }
          }

        )
            .then(res => {
                console.log('API call response:', res);
                dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log('API call error:', err);
                dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
            });

            */
  /*
            
         return  rp(requestOptions).then(response => {
            console.log('API call response:', response);
            dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: response })
          }).catch((err) => {
            console.log('API call error:', err.message);
            dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
            
          });
*/
    }

}
//https://pro-api.coinmarketcap.com/v1/exchange/quotes/latest
/*
const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      start: 1,
      limit: 5000,
      convert: 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
    },
    json: true,
    gzip: true
  };
  
  
  
  */