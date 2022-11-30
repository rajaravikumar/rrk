import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';
// import Marriage from '@assets/images/marriage.png';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">

              <p className="info">
              Can't wait to celebrate auspicious moment of our family with you!
              </p>

              { /* <img src={Marriage} alt="Marriage" className="img-responsive" loading="lazy" /> */} 
                <h2 className="main-font">Thank you</h2>
               
                <p className="info">
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2022 Ravi & Pallavi Wedding. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
