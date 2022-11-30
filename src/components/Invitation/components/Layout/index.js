import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';
import Favicon from './../../assets/images/favicon.ico';
import './../../assets/css/icomoon.css';
import './../../assets/css/bootstrap.css';
import './../../assets/css/style.css';

const IMAGE_URL = ``;
const META_DESCRIPTION = `Together with our families, we joyfully invite you to the wedding of Ravi & Pallavi. You are cordially requested to join the festive event!.`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Ravi Weds Pallavi</title>
        {/* Ravi ❤️ Pallavi*/}
        {/* Favicon */}
         <link rel="icon" type="image/x-icon" href={Favicon} /> 

        {/* font and SEO tags */}
        <meta property="og:title" content="The Wedding of Ravi & Pallavi" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content="http://rajaravikumar.in/" />
        <meta property="og:site_name" content="The Wedding of Ravi & Pallavi" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content="The Wedding of Ravi & Pallavi" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content="http://rajaravikumar.in/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="http://rajaravikumar.in/" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
