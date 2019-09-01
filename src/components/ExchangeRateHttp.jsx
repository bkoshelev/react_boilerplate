import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExchangeRate from './ExchangeRate';
import { getExchangeRatesRequest } from '../actions';

const ExchangeRateHttp = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.usd);

  useEffect(() => {
    dispatch(getExchangeRatesRequest());
  }, []);

  const properties = {
    fromСurrency: 'rur',
    toCurrency: 'usd',
    value,
  };

  return <ExchangeRate {...properties}></ExchangeRate>;
};

export default ExchangeRateHttp;
