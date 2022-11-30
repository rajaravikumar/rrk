import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import LocationSection from './../../components/LocationSection';
import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="godName">Sairam</span>
              <h2 className="main-font main-font__wedding">Marriage Ceremony and Wedding Celebration</h2>
              <a className="sub-title__wedding" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MW5mZG9uYWVlZG5rZjQwazh0YXJrOGdnazYgZmFtaWx5MTI4MTI1NzU5MjIzMDg3MDg1MDVAZw&amp;tmsrc=family12812575922308708505%40group.calendar.google.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" /></a>
        
        </div>
       
          </div>
          <div className="row">
            {!isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Reception"
                  time="6:00PM - 10:00PM"
                  date="Thursday, 26th January 2023"
                  description="S.R.R. Kalyana Mantapa <br/> No:84, 1, B.Channasandra Main Rd, next to Chaithanya School, Gurijiya Gutta, OMBR Layout, Banaswadi, Bengaluru, Karnataka 560043"
                />
                <WeddingInfoBox
                  title="Muhurtham"
                  time="9:30AM - 10:30AM"
                  date="Friday, 27th January 2023"
                  description="S.R.R. Kalyana Mantapa <br/> No:84, 1, B.Channasandra Main Rd, next to Chaithanya School, Gurijiya Gutta, OMBR Layout, Banaswadi, Bengaluru, Karnataka 560043"
                />
              </div>
            )}
          </div>

         
        </div>
       <div className="col-md-8 col-md-offset-2 text-center fh5co-heading"> <h2 className="main-font main-font__wedding">Yours presence  will bring us go much joy.</h2></div>
       
      </div>
      <LocationSection />
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
