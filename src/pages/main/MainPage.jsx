import React from 'react';
import { css } from 'linaria';

import { Link } from 'react-router-dom';
import ExchangeRateHttp from '../../components/ExchangeRateHttp';
import ExchangeRateSocket from '../../components/ExchangeRateSocket';

const main = css`
  :global() {
    @import 'normalize.css';
    @import 'sanitize.css';

    #root {
      height: 100vh;
      width: 100vw;
      display: grid;
      align-content: center;
      justify-content: center;
    }
  }
`;

const listStyle = css`
  width: 90vw;
  display: grid;
  grid-template: 100px 300px / 1fr 1fr 1fr;
  grid-column-gap: 50px;

  @media (min-width: 0px) and (max-width: 1136px) {
    grid-template: 1fr 1fr 1fr / 90vw;
  }
`;

const containterStyle = css`
  display: grid;
  align-content: center;
  justify-content: center;
`;

const MainPage = () => (
  <>
    <div>hello</div>
    <main className={main}>
      <div className={listStyle}>
        <h4>http request test</h4>
        <h4>socket connect test</h4>
        <h4>link to page 2 (route test)</h4>
        <ExchangeRateHttp></ExchangeRateHttp>
        <ExchangeRateSocket></ExchangeRateSocket>
        <div className={containterStyle}>
          <Link to="/page2">link to page2</Link>
        </div>
      </div>
    </main>
  </>
);

export default MainPage;
