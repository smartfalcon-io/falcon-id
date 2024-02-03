import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const VideoPopup = styled.div`
  ${tw`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-black bg-opacity-75`}
  width: 160vw; /* Set the width to be double the size of the video container */
  height: 160vh; /* Set the height to be double the size of the video container */
`;

const VideoContainer = styled.div`
  ${tw`relative`}
  max-width: 80vw;
  max-height: 80vh;
  iframe {
    ${tw`rounded bg-black shadow-xl`}
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled.button`
  ${css`absolute top-4 right-4 text-white cursor-pointer text-xl`}
`;

const StyledResponsiveVideoEmbed = styled.div`
  ${tw`cursor-pointer`}
`;

export default ({
  videourl = "https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Ffarmer_usecase.mp4",
}) => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const openVideoPopup = () => {
    setShowVideoPopup(true);
  };

  const closeVideoPopup = () => {
    setShowVideoPopup(false);
  };

  return (
    <>
      <StyledResponsiveVideoEmbed onClick={openVideoPopup}>
        {/* Consider using a play button overlay on the video */}
        <img
          src="play_button.png"
          alt="Play Video"
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
        />
      </StyledResponsiveVideoEmbed>

      {showVideoPopup && (
        <VideoPopup>
          <VideoContainer>
            <CloseButton onClick={closeVideoPopup}>&times;</CloseButton>
            <iframe
              title="Video"
              src={videourl}
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </VideoContainer>
        </VideoPopup>
      )}
    </>
  );
};
