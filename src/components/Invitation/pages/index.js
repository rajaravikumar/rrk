import React, { useState, Fragment } from 'react';
import { object } from 'prop-types';
import getQueryValue from './../helpers/getQueryValue';
import MainLayout from './../components/Layout';
import WelcomeSection from './../components/WelcomeSection';
import HelloSection from './../components/HelloSection';
import WeddingSection from './../components/WeddingSection';
import StorySection from './../components/StorySection';
import PhotoSection from './../components/PhotoSection/Loadable';
import WishesSection from './../components/WishesSection';
import FooterSection from './../components/FooterSection';
import FloatingMusic from './../components/FloatingMusic/Loadable';
import NotesScreen from './../components/Notes/NotesScreen';

function Invitation({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const isInvitation = getQueryValue(location, 'type') === 'invitation';
  const isAnonymGuest = guestName === '' && !isInvitation;
 
  const [showDetailContent, setShowDetailContent] = useState(false);

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };

  const renderDetailContent = () => {
    if (!showDetailContent) return null;

    return (
      <Fragment>
      
        <HelloSection isInvitation={isInvitation} />
        <WeddingSection isInvitation={isInvitation} />
       {/* <StorySection /> */} 
       {/*  <PhotoSection />*/} 
       {/*   <WishesSection /> */}
       {/* <NotesScreen /> */}
        <FooterSection isInvitation={isInvitation} />
      </Fragment>
    );
  };

  return (
     <MainLayout>
      <WelcomeSection
        guestName={guestName}
        isAnonymGuest={isAnonymGuest}
        isInvitation={isInvitation}
        location={location}
        onClickDetail={handleClickDetail}
      />
      // {renderDetailContent()}
      {/* <FloatingMusic /> */}
   </MainLayout>
  );
}

Invitation.propTypes = {
  location: object.isRequired,
};

export default Invitation;
