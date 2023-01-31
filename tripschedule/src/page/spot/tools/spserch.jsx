import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Checkbox from './checkbox/Checkbox';
import "./spserch.css";

const Spserch = () => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/attractions_info')
      .then(res => setAttractions(res.data))
      .catch(err => console.error(err));
  }, []);

  // function ParentComponent() {
  //   const [value, setValue] = useState();

  //   const handleValueChange = (newValue) => {
  //     setValue(newValue);
  //   }
  //   return (
  //     <Checkbox handleValueChange={handleValueChange} />
  //   );
  // }

  return (
    <div>
      <div className="chareati">
        <h1>景點搜尋</h1>
        <p>瞄準東京的景點一網打盡吧!</p>
      </div>  <div className="charea">
        <div className="chicon">
          <div className="spcicons">
            <Checkbox />
          </div>
        </div>
        <div className="spotde">
          {attractions.map((attraction) => (
            <div className="spde">
              <img src={attraction.path} />
              <div className="spdeInformation">
                <h1>{attraction.name}</h1>
                <p>{attraction.detailed}</p>
                <div className="spdec">
                  <div className="spdeCard1">
                    <h4>價格:</h4>
                    <h3>{attraction.ticketprice}.NT</h3>
                  </div>
                  <div className="spdeCard2">
                    <h4>熱門程度:{attraction.clickrate}</h4>
                  </div>
                  <div className="spdeCard3">
                    <button type='button'>了解詳情</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spserch;