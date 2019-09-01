const GET_EXCHANGE_RATES_REQUEST = 'GET_EXCHANGE_RATES_REQUEST';

const getExchangeRatesRequest = content => ({
  type: GET_EXCHANGE_RATES_REQUEST,
  payload: {
    content,
  },
});

const GET_EXCHANGE_RATES_SUCCESS = 'GET_EXCHANGE_RATES_SUCCESS';

const getExchangeRatesSuccess = content => ({
  type: GET_EXCHANGE_RATES_SUCCESS,
  payload: {
    content,
  },
});

const GET_EXCHANGE_RATES_FAILURE = 'GET_EXCHANGE_RATES_FAILURE';

const getExchangeRatesFailure = content => ({
  type: GET_EXCHANGE_RATES_FAILURE,
  payload: {
    content,
  },
});

export {
  getExchangeRatesRequest,
  getExchangeRatesSuccess,
  getExchangeRatesFailure,
  GET_EXCHANGE_RATES_REQUEST,
  GET_EXCHANGE_RATES_SUCCESS,
  GET_EXCHANGE_RATES_FAILURE,
};
