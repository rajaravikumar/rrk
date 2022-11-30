import React from 'react';
import { string } from 'prop-types';

function WeddingInfoBox({ title, date, time, description }) {
  return (
    <div className="col-md-6 col-sm-6 text-center">
      <div className="event-wrap">
        <h3>{title}</h3>
        <div className="event-col">
          <i className="icon-clock"></i>
          <span>{time}</span>
        </div>
        <div className="event-col">
          <i className="icon-calendar"></i>
          <span>{date}</span>
        </div>
        {description && (
          <div className="event-col">
            <i className="icon-location-pin" ></i>
            <span dangerouslySetInnerHTML={{ __html: description }} />
            <span>
            {/* <button><a className="sub-title__wedding" target="_blank" href="https://www.google.com/maps/place/S.R.R.+Kalyana+Mantapa/@13.0053196,77.6503285,16z/data=!4m19!1m13!4m12!1m4!2m2!1d77.5734042!2d12.9096843!4e1!1m6!1m2!1s0x3bae112cc32519c9:0xcf4f8dd8b1d002cd!2sNo:84,+S.R.R.+Kalyana+Mantapa,+1,+B.Channasandra+Main+Rd,+next+to+Chaithanya+School,+Gurijiya+Gutta,+OMBR+Layout,+Banaswadi,+Bengaluru,+Karnataka+560043!2m2!1d77.655029!2d13.0076531!3m4!1s0x3bae112cc32519c9:0xcf4f8dd8b1d002cd!8m2!3d13.0076531!4d77.655029">
            Location
           </a></button>  */}
           </span>
          </div>
        )}
      </div>
    </div>
  );
}

WeddingInfoBox.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  description: string.isRequired,
};

export default React.memo(WeddingInfoBox);
