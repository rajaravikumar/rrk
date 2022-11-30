import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Location</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click to view the map on Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>S.R.R. Kalyana Mantapa</strong>
                </a>{' '}
                <br />
                No:84, 1, B.Channasandra Main Rd, next to Chaithanya School,<br />
                Gurijiya Gutta, OMBR Layout, Banaswadi, Bengaluru, Karnataka 560043
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124422.09947664762!2d77.54765625875189!3d12.959651793741175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae112cc32519c9%3A0xcf4f8dd8b1d002cd!2sS.R.R.%20Kalyana%20Mantapa!5e0!3m2!1sen!2sin!4v1669732443132!5m2!1sen!2sin"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Ravi & Pallavi Wedding Party"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
