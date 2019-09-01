import { GET_EXCHANGE_RATES_SUCCESS } from '../actions';

const app = (state = { usd: null }, action) => {
  switch (action.type) {
    case GET_EXCHANGE_RATES_SUCCESS: {
      return { ...state, usd: action.payload.content };
    }
    default:
      return state;
  }
};

export default app;
