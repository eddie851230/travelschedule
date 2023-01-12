// src/SpotMap.js
import React, { Component, useEffect } from "react";
// import "./LeafletMap.css";
// import axios from "axios";

export default function Spotmap(p) {
  console.log(p.spotListinfo);

  // constructor(props) {
  //   super(props);
  // }

  //attrs
  //-----------------------------------------------------------------
  // state = {
  //   map: {},
  //   data: {},
  //   dataLoaded: false,
  // // };

  // state =[
  //    {
  //   id: {},
  //   name: {},
  //   opentime: 1,
  //   clickrate: 1,
  //   ticketprice: 1,
  //   address: 1,
  //   suggestedtime: 1,
  //   path: 1,
  // },
  // {
  //   id: {},
  //   name: {},
  //   opentime: 1,
  //   clickrate: 1,
  //   ticketprice: 1,
  //   address: 1,
  //   suggestedtime: 1,
  //   path: 1,
  // }
  // ];

  //methods
  //-----------------------------------------------------------------
  // loadDataAsync = async () => {
  //     // let response=await fetch(
  //     //   "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR3fyzFIBPOMj1WcDLJaXEYFZQiAlfW9BFYpsSN_sELepbKtdjM4HGgP7NM",
  //     //   {}
  //     // )
  // let response = await axios({
  //       //请求方法
  //       method: "GET",
  //       //url
  //       // url: "http://127.0.0.1:8000/schedules",
  //       url: "http://127.0.0.1:8000/showSpot",
  //       // url: "https://jsonplaceholder.typicode.com/users",
  //     });
  //     //响应状态码
  //     console.log(response.status);
  //     //响应状态字符串
  //     console.log(response.statusText);
  //     //响应头信息
  //     console.log(response.headers);
  //     //响应体
  //     console.log(response.data);
  // //response.data array
  //     this.setState([...response.data]);
  //     // console.log(response.data);

  //   };

  const mapping = () => {
    let map;
    if (map) {
      map.remove();
    }
    let L = window.L;
    map = new L.Map("Spotmap").setView([35.6267108, 139.8850779], 15);

    let layer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }
    );
    map.addLayer(layer);
    console.log(2);
  };
  let L = window.L;
  let marker = new L.marker(
    new L.latLng([p.spotListinfo[0].lat, p.spotListinfo[0].lng])
  );
  console.log(p.spotListinfo);
  // mapping();
  //hooks
  //-----------------------------------------------------------------
  useEffect(() => {
    mapping();
  }, []);

  // useEffect(() => {
  //   mapping();
  //  console.log(this);
  //   let L = window.L;
  //   // [a1+a2+a3.../n,a1+a2+a3.../n]
  //   let map = new L.Map("Spotmap").setView(
  //     [23.79037129915711, 120.95281938174952],
  //     10
  //   );
  //   let layer = L.tileLayer(
  //     "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  //     {
  //       attribution:
  //         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  //     }
  //   );
  // let marker = new L.marker(
  //   new L.latLng([p.spotListinfo[0].lat, p.spotListinfo[0].lng])
  // );
  // map.addLayer(layer);
  // this.setState({ map: map });
  // console.log(p.onSpotUpdate);
  // p.onSpotUpdate();
  // });

  return (
    <div id="Spotmap" style={{ width: "70%" }}>
      {/* {mapping()} */}
    </div>
  );
}
