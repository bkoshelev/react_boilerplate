import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import ExchangeRate from './ExchangeRate';
import { getExchangeRatesRequest } from '../actions';

const useSocketHook = () => {
  const socket = io('wss://api-pub.bitfinex.com', { path: '/ws/2', transport: ['websocket'] });
  // const socket = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

  const [value, updateValue] = useState(0);

  socket.on('connect', function connect() {
    console.log('>>> connect socket');
  });
  socket.on('event', function event() {
    if (value > 100) {
      socket.disconnect();
    }
    updateValue(oldValue => oldValue + 1);
  });
  socket.on('disconnect', function disconnect() {
    console.log('>>> disconnect socket');
  });

  return value;
};

const ExchangeRateSocket = () => {
  const dispatch = useDispatch();
  const value = useSocketHook();

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

export default ExchangeRateSocket;
