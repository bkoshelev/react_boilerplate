import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'linaria';

const exchangeRateStyle = css`
  border-radius: 50px;
  box-shadow: 20px 20px 10px 10px black;
  background-color: orange;
  display: grid;
`;

const ExchangeRate = ({ fromСurrency = '', toCurrency = '', value = 0 }) => {
  return (
    <output className={exchangeRateStyle}>
      <span>{fromСurrency}</span>
      <span>{toCurrency}</span>
      <span>{value}</span>
    </output>
  );
};

ExchangeRate.propTypes = {
  fromСurrency: PropTypes.string,
  toCurrency: PropTypes.string,
  value: PropTypes.number,
};
export default ExchangeRate;
