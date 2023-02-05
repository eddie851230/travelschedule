import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Checkbox from './checkbox/Checkbox';
import "./spserch.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Checkbox.css";
import {Link} from 'react-router-dom';

const userData = [
  { name: "遊樂園", value: 1 },
  { name: "自然園區", value: 2 },
  { name: "美食", value: 3 },
  { name: "購物", value: 4 },
  { name: "知識", value: 5 },
  { name: "動物園", value: 6 },
  { name: "神社", value: 7 },
  { name: "古蹟", value: 8 },
  { name: "景觀", value: 9 }
];


const Spserch = () => {

  const [users, setUsers] = React.useState([]);
  const [attractions, setAttractions] = useState([]);
  const [filteredAttractions, setFilteredAttractions] = useState([]);

  React.useEffect(() => {
    setUsers(userData.map(user => ({ ...user, isChecked: true })));
  }, []);

 

  React.useEffect(() => {
    axios.get('http://localhost:8000/attractions_info')
      .then(res => setAttractions(res.data))
      .catch(err => console.error(err));
  }, []);


  React.useEffect(() => {
    const filtered = attractions.filter(attraction =>
      users.find(user => user.isChecked && user.value === attraction.element_id)
    );
   const newFilter=filtered.filter((r,i,s)=>s.findIndex(t=>t.id===r.id)===i);
    // console.log('filtered',filtered)
    // console.log('newFilter',newFilter)

    setFilteredAttractions(newFilter);
    console.log('filteredAttractions',filteredAttractions);
  }, [users, attractions]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  return (
    <div>
      <div className="chareati">
        <h1>景點搜尋</h1>
        <p>瞄準東京的景點一網打盡吧!</p>
      </div>  <div className="charea">
        <div className="chicon">
          <div className="spcicons">
            <div className="container my-4" style={{ width: "200px" }}>
              <form className="form w-100">
                <h3>篩選器:</h3>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="allSelect"
                    style={{ backgroundColor: "rgb(254, 218, 2)" }}

                    // checked={
                    //   users.filter((user) => user?.isChecked !== true).length < 1
                    // }
                    checked={!users.some((user) => user?.isChecked !== true)}
                    onChange={handleChange}
                  />
                  <label className="form-check-label ms-2">全選</label>
                </div>
                {users.map((user, index) => (
                  <div className="form-check" key={index}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name={user.name}
                      checked={user?.isChecked || false}
                      onChange={handleChange}
                      style={{ backgroundColor: "rgb(254, 218, 2)" }}
                    />
                    <label className="form-check-label ms-2">{user.name}</label>
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>
        <div className="spotde">
          {filteredAttractions.map((attraction) => (
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
                    <Link to={'/Spot/'+attraction.id}>
                    <button type='button'>了解詳情</button></Link>
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