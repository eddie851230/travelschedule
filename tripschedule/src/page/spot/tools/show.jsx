import React, { useState } from 'react';
import './show.css'
import spotData from "../../../spot.json";

function SingleSpotPage({match}) {
  const spot = spotData.find(spot => spot.id === match.params.id);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(true);
  };




  return (
    <div onWheel={handleScroll} className='single-spot-page'>
      <img
        src={spot.url}
        className={`spot-image ${isVisible ? 'visible' : 'hidden'}`}
        alt={spot.name}
      />
      <h2>{spot.name}</h2>
      <p>{spot.description}</p>
    </div>
  );
}

export default SingleSpotPage;
