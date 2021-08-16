import React from "react";

const PlaceDetails = ({ place }) => {
  return (
    <div>
      <h1>Place Details!</h1>
      <h3>{place.name}</h3>
    </div>
  );
};

export default PlaceDetails;
