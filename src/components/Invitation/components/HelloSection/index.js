import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/pallavi.jpg';
import Groom from '@assets/images/ravi.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation ? '27th January 2023, S.R.R. Kalyana Mantapa, No:84, 1, B.Channasandra Main Rd, next to Chaithanya School, Gurijiya Gutta, OMBR Layout, Banaswadi, Bengaluru, Karnataka 560043' : 'On, 27th January 2023';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              {/* <h2 className="main-font">WE ARE GETTING HITCHED</h2> */} 
              <h2 className="main-font">We're finally tying knot!</h2>
              <p className="info">
              Together with our parents 
              <br />
              Mr. Raja P & Mrs. Manjula M 
              <br />
              Mr. Gnanasekaran S & Vasanthamala G
              </p>
              <h3 className="main-font main-font__wedding"> We Invite you to share in a celebration of love as we exchange our marriage vows</h3>
             
              <h3 className="sub-title hs">{finalSubtitle}</h3>
            
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
              <h3 className="main-font">Ravi Kumar R.</h3>
               { /* <p className="parent-name">
                Raja P <br />& Manjula M
  </p> */}
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Pallavi G</h3>
                {/*<p className="parent-name parent-name__top">
                  Gnanasekaran S <br />& Vasanthamala G
</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isInvitation ? (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font"></h2>
                <p className="info">
                  
                </p>
                <p className="info">
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
