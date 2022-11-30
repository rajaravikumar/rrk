import React from 'react';

import IconIg from './assets/instagram.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Present virtually through Facebook live broadcasts: </p>
        <a href="https://www.facebook.com/rajaravikumar" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconIg} alt="Live IG" />
              <span>@rajaravikumar</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
