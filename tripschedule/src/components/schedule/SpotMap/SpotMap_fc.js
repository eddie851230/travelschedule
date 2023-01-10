// src/SpotMap.js
import React, { Component, useEffect } from "react";
// import "./LeafletMap.css";
import axios from "axios";

export default function Spotmap(p) {
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
  //   loadDataAsync = async () => {
  //     // let response=await fetch(
  //     //   "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR3fyzFIBPOMj1WcDLJaXEYFZQiAlfW9BFYpsSN_sELepbKtdjM4HGgP7NM",
  //     //   {}
  //     // )
  //     let response = await axios({
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

  //hooks
  //-----------------------------------------------------------------
  useEffect(() => {
    let L = window.L;
    // [a1+a2+a3.../n,a1+a2+a3.../n]
    let map = new L.Map("Spotmap").setView(
      [23.79037129915711, 120.95281938174952],
      10
    );
    let layer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }
    );
    map.addLayer(layer);
    // this.setState({ map: map });
    console.log(p);

    console.log(p.onSpotUpdate);
    // p.onSpotUpdate();
  });

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   let L = window.L;
  //   // if (prevState.dataLoaded) {
  //   //   let first10Spot = prevState.data["features"].slice(0, 10);
  //   //   for (let Spot of first10Spot) {
  //   //     let coordiantes = Spot["geometry"]["coordinates"];
  //   // coordiantes = [coordiantes[1], coordiantes[0]];
  //   // let marker = new L.marker(new L.latLng(coordiantes));
  //   // let popupmsg = `
  //   //         景點名稱: ${Spot["properties"]["name"]}<br/>
  //   //         地址: ${Spot["properties"]["address"]}<br/>
  //   //         開放時間: ${Spot["properties"]["id"]} <br/>
  //   //         價格: ${Spot["properties"]["phone"]}<br/>

  //   //         `;

  //   // marker.bindPopup(popupmsg);
  //   // prevState.map.addLayer(marker);
  //   //   }
  //   // }
  //   return null;
  // }

  return (
    <div id="Spotmap" style={{ width: "70%" }}>
      {console.log(p)}
    </div>
  );
}
