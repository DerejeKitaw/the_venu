import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49570.14792153477!2d-76.99633139334212!3d39.05785473641894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c5742b5fbd3d%3A0x8319acc9f3c15dc7!2sWhite+Oak+Library!5e0!3m2!1sen!2sus!4v1536202908933"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
