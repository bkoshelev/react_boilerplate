import { put, take } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_EXCHANGE_RATES_REQUEST,
  getExchangeRatesSuccess,
  getExchangeRatesFailure,
} from '../actions';

function* getExchangeRates() {
  while (true) {
    yield take(GET_EXCHANGE_RATES_REQUEST);
    try {
      const data = yield axios.get('https://api.exchangeratesapi.io/latest');
      console.log(data);
      yield put(getExchangeRatesSuccess(data.data.rates.USD));
    } catch (error) {
      yield put(getExchangeRatesFailure(error.message));
    }
  }
}

export default getExchangeRates;
