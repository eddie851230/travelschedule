// src/SpotMap.js
import React, { useEffect } from "react";
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

    let L = window.L;
    if (map) {
      map.remove();
    }
    //centerlatlng 總和取平均

    var sumlat = 0;
    var sumlng = 0;

    for (let i = 0; i < p.spotListinfo.length; i++) {
      // console.log(typeof p.spotListinfo[i].lat);//string?!
      sumlat += Number(p.spotListinfo[i].lat);
    }
    for (let i = 0; i < p.spotListinfo.length; i++) {
      sumlng += Number(p.spotListinfo[i].lng);
    }
    let centerlat = sumlat / p.spotListinfo.length;
    let centerlng = sumlng / p.spotListinfo.length;
    console.log(centerlat, centerlng);

    //centerlatlng 取最大最小取平均
    // console.log(typeof lat);
    //map
    // map = new L.Map("Spotmap").setView([35.6267108, 139.8850779], 13);
    map = new L.Map("Spotmap").setView([centerlat, centerlng], 10.5);
    //tag
    let layer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }
    );
    map.addLayer(layer);
    console.log(2);
    //icon
    const greenIcon = new L.Icon({
      iconUrl:
        // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    ////for marker v1
    // for (let index = 0; index < p.spotListinfo.length; index++) {
    //   let marker = new L.marker(
    //     new L.latLng([p.spotListinfo[index].lat, p.spotListinfo[index].lng], {
    //       icon: greenIcon,
    //     })
    //   );

    //   map.addLayer(marker);
    // }

    //for marker v2
    for (let index = 0; index < p.spotListinfo.length; index++) {
      L.marker([p.spotListinfo[index].lat, p.spotListinfo[index].lng], {
      icon: greenIcon,
    }).addTo(map);
    }
    // L.marker([p.spotListinfo[index].lat, p.spotListinfo[index].lng], {
    //   icon: greenIcon,
    // }).addTo(map);
  }; //end   mapping = () => {

  // console.log(p.spotListinfo);

  //hooks
  //-----------------------------------------------------------------
  useEffect(() => {
    mapping();
  });

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
    <div id="Spotmap" style={{ width: "70%" }} key={p.spotListinfo}>
      {/* {mapping()} */}
    </div>
  );
}
