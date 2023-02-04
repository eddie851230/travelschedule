import React, { useEffect, useState } from "react";

import SearchCard from "../../components/hotel/SearchCard";
import { Link, Route, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./index.css";
import "./hotel-search.css";
// import bgImg from "/20230102/travelschedule/tripschedule/public/img/hotel_img/search-page-bg.jpg";

const Search1 = (props) => {
  // window.scrollTo(0, 0);
  const [comfirm, isComfirm] = useState(false);
  const getData = (e) => {
    isComfirm(!e.target.checked);
    if (comfirm) {
      //如果"confirm 等於false"是true的話
      props.Getwawa(e.target.value); //去執行寫在父層此component的Getwawa
    } //Getwawa是寫在父層的method，叫做getChild
    // e.target是去找input的property，property其中的value值
  };
  return (
    <>
      <label className="container">
        {" "}
        {props.value.name}
        <input
          checked={!comfirm} //初始預設為true=>一開始都會被勾起來
          type="checkbox"
          name={props.value.set}
          value={props.value.name}
          // className="checkmark"
          onChange={(e) => {
            getData(e);
          }}
        />
        <span className="checkmark"></span>
      </label>
    </>
  );
};

export default Search1;
