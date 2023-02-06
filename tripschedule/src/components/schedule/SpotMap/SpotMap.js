// 地圖個別放大!!!!!!!!!
// src/SpotMap.js
import React, { useEffect } from "react";
import { useLocation } from "react-router";
// import "./LeafletMap.css";
// import axios from "axios";

export default function Spotmap(p) {
  const spotMapLocation = useLocation();
  console.log(spotMapLocation);
  console.log(spotMapLocation.hash);
  // console.log(p);
  // console.log(p.spotListinfoFilter1);
  // console.log(p.spotListinfoFilter2);
  // console.log(p.spotListinfoFilter3);
  // var isload;
  // console.log(p.spotListinfo);

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
  //hooks
  //-----------------------------------------------------------------
  useEffect(() => {
    let map = new window.L.Map("Spotmap");
    const mapping = () => {
      // //===============================================================
      // //1定義變數
      // let L = window.L;
      // //centerlatlng 總和取平均
      // let layer1;
      // var sumlat = 0;
      // var sumlng = 0;
      // for (let i = 0; i < p.spotListinfo.length; i++) {
      //   // console.log(typeof p.spotListinfo[i].lat);//string?!
      //   sumlat += Number(p.spotListinfo[i].lat);
      // }
      // for (let i = 0; i < p.spotListinfo.length; i++) {
      //   sumlng += Number(p.spotListinfo[i].lng);
      // }
      // let centerlat = sumlat / p.spotListinfo.length;
      // let centerlng = sumlng / p.spotListinfo.length;
      // // console.log(centerlat, centerlng);

      // //centerlatlng 取最大最小取平均
      // // console.log(typeof lat);
      //===============================================================
      //2 map 初始化、匯入圖磚
      // if (map) {
      //   map = map.off();
      //   map.remove();
      //   //  map.remove();
      //    map = undefined;
      //   //  document.getElementById("Spotmap").innerHTML = "";
      //   // map.invalidateSize();
      // }
      //===========================
      // if (!map) {
      //   console.log(1);
      //   map.remove();

      //   L.map("Spotmap", {});
      //   console.log(2);
      // }

      // if (layer1) {
      //   layer1.remove();
      // }
      // document.getElementById("Spotmap").innerHTML =
      //   "<div id='map' style='width: 100%; height: 100%;'></div>";
      // map = new L.Map("Spotmap").setView([35.6267108, 139.8850779], 13);
      // map = new L.Map("Spotmap")
      // .setView([centerlat, centerlng], 10.5);
      //  let map = new L.Map("Spotmap");
      // //===========================================
      // function initializeMap(lator, lonor, markers) {
      //   // map.setView(L.latLng(lator, lonor));
      //   map.setView([centerlat, centerlng], 10.5);
      // }
      // initializeMap(centerlat, centerlng);
      // //tag
      // layer1 = L.tileLayer(
      //   "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      //   {
      //     attribution:
      //       '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      //   }
      // );
      // map.addLayer(layer1);

      // ==========================================================

      let L = window.L;
      var sumlat = 0;
      var sumlng = 0;
      // if (spotMapLocation.hash === false) {
      //   //===============================================================
      //   //1定義變數
      //   //centerlatlng 總和取平均
      //   let layer1;
      //   console.log(p);
      //   for (let i = 0; i < p.spotListinfo.length; i++) {
      //     // console.log(typeof p.spotListinfo[i].lat);//string?!
      //     sumlat += Number(p.spotListinfo[i].lat);
      //   }
      //   for (let i = 0; i < p.spotListinfo.length; i++) {
      //     sumlng += Number(p.spotListinfo[i].lng);
      //   }
      //   let centerlat = sumlat / p.spotListinfo.length;
      //   let centerlng = sumlng / p.spotListinfo.length;
      //   console.log(centerlat, centerlng);
      //   //centerlatlng 取最大最小取平均
      //   // console.log(typeof lat);
      //   //===============================================================
      //   //2 map 初始化、匯入圖磚
      //   function initializeMap(lator, lonor, markers) {
      //     // map.setView(L.latLng(lator, lonor));
      //     map.setView([centerlat, centerlng], 10.5);
      //   }
      //   initializeMap(centerlat, centerlng);
      //   console.log(centerlat, centerlng);
      //   //tag
      //   layer1 = L.tileLayer(
      //     "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      //     {
      //       attribution:
      //         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      //     }
      //   );
      //   map.addLayer(layer1);
      //   //===============================================================
      //   //3標記點 加入
      //   let index;
      //   //icon、popup
      //   const redIcon = new L.Icon({
      //     iconUrl:
      //       // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //       // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //       // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //       // "https://cdn-icons-png.flaticon.com/512/727/727598.png",
      //       "/img/schedule/redIcon.png",
      //     shadowUrl:
      //       // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //       "https://www.vilageo.com/images/marker-shadow.png",
      //     iconSize: [45, 45],
      //     iconAnchor: [12, 41],
      //     popupAnchor: [1, -34],
      //     shadowSize: [45, 45],
      //   });
      //   const orangeIcon = new L.Icon({
      //     iconUrl:
      //       // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //       // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //       // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //       "/img/schedule/orangeIcon.png",
      //     shadowUrl:
      //       // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //       "https://www.vilageo.com/images/marker-shadow.png",
      //     iconSize: [45, 45],
      //     iconAnchor: [12, 41],
      //     popupAnchor: [1, -34],
      //     shadowSize: [45, 45],
      //   });
      //   const greenIcon = new L.Icon({
      //     iconUrl:
      //       // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //       // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //       // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //       "/img/schedule/greenIcon.png",
      //     shadowUrl:
      //       // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //       "https://www.vilageo.com/images/marker-shadow.png",
      //     iconSize: [45, 45],
      //     iconAnchor: [12, 41],
      //     popupAnchor: [1, -34],
      //     shadowSize: [45, 45],
      //   });

      //   // for (index = 0; index < p.spotListinfoFilter1.length; index++) {
      //   //   let popupmsg = `
      //   //     <h3>景點名稱:${p.spotListinfoFilter1[index].name}</h3>
      //   //     <p>地址: ${p.spotListinfoFilter1[index].address}</p>
      //   //     開放時間: ${p.spotListinfoFilter1[index].opentime} <br/>
      //   //     價格: ${p.spotListinfoFilter1[index].ticketprice}<br/>
      //   //     `;

      //   //   let marker = L.marker(
      //   //     [
      //   //       p.spotListinfoFilter1[index].lat,
      //   //       p.spotListinfoFilter1[index].lng,
      //   //     ],
      //   //     {
      //   //       icon: redIcon,
      //   //     }
      //   //   );
      //   //   marker.addTo(map).bindPopup(popupmsg);
      //   // }
      //   // for (index = 0; index < p.spotListinfoFilter2.length; index++) {
      //   //   let popupmsg = `
      //   //     <h3>景點名稱:${p.spotListinfoFilter2[index].name}</h3>
      //   //     <p>地址: ${p.spotListinfoFilter2[index].address}</p>
      //   //     開放時間: ${p.spotListinfoFilter2[index].opentime} <br/>
      //   //     價格: ${p.spotListinfoFilter2[index].ticketprice}<br/>
      //   //     `;

      //   //   let marker = L.marker(
      //   //     [
      //   //       p.spotListinfoFilter2[index].lat,
      //   //       p.spotListinfoFilter2[index].lng,
      //   //     ],
      //   //     {
      //   //       icon: orangeIcon,
      //   //     }
      //   //   );
      //   //   marker.addTo(map).bindPopup(popupmsg);
      //   // }

      //   // for (index = 0; index < p.spotListinfoFilter3.length; index++) {
      //   //   let popupmsg = `
      //   //     <h3>景點名稱:${p.spotListinfoFilter3[index].name}</h3>
      //   //     <p>地址: ${p.spotListinfoFilter3[index].address}</p>
      //   //     開放時間: ${p.spotListinfoFilter3[index].opentime} <br/>
      //   //     價格: ${p.spotListinfoFilter3[index].ticketprice}<br/>
      //   //     `;

      //   //   let marker = L.marker(
      //   //     [
      //   //       p.spotListinfoFilter3[index].lat,
      //   //       p.spotListinfoFilter3[index].lng,
      //   //     ],
      //   //     {
      //   //       icon: greenIcon,
      //   //     }
      //   //   );
      //   //   marker.addTo(map).bindPopup(popupmsg);
      //   // }
      // }
      // if (spotMapLocation.hash === false) {
      //   //===============================================================
      //   //1定義變數
      //   //centerlatlng 總和取平均
      //   let layer1;
      //   console.log(p);
      //   for (let i = 0; i < p.spotListinfoFilter1.length; i++) {
      //     // console.log(typeof p.spotListinfo[i].lat);//string?!
      //     sumlat += Number(p.spotListinfoFilter1[i].lat);
      //   }
      //   for (let i = 0; i < p.spotListinfoFilter1.length; i++) {
      //     sumlng += Number(p.spotListinfoFilter1[i].lng);
      //   }
      //   let centerlat = sumlat / p.spotListinfoFilter1.length;
      //   let centerlng = sumlng / p.spotListinfoFilter1.length;
      //   console.log(centerlat, centerlng);
      //   //centerlatlng 取最大最小取平均
      //   // console.log(typeof lat);
      //   //===============================================================
      //   //2 map 初始化、匯入圖磚
      //   function initializeMap(lator, lonor, markers) {
      //     // map.setView(L.latLng(lator, lonor));
      //     map.setView([centerlat, centerlng], 10.5);
      //   }
      //   initializeMap(centerlat, centerlng);
      //   console.log(centerlat, centerlng);
      //   //tag
      //   layer1 = L.tileLayer(
      //     "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      //     {
      //       attribution:
      //         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      //     }
      //   );
      //   map.addLayer(layer1);
      //   //===============================================================
      //   //3標記點 加入
      //   let index;
      //   //icon、popup
      //   const redIcon = new L.Icon({
      //     iconUrl:
      //       // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //       // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //       // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //       // "https://cdn-icons-png.flaticon.com/512/727/727598.png",
      //       "/img/schedule/redIcon.png",
      //     shadowUrl:
      //       // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //       "https://www.vilageo.com/images/marker-shadow.png",
      //     iconSize: [45, 45],
      //     iconAnchor: [12, 41],
      //     popupAnchor: [1, -34],
      //     shadowSize: [45, 45],
      //   });
      //   const orangeIcon = new L.Icon({
      //     iconUrl:
      //       // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //       // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //       // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //       "/img/schedule/orangeIcon.png",
      //     shadowUrl:
      //       // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //       "https://www.vilageo.com/images/marker-shadow.png",
      //     iconSize: [45, 45],
      //     iconAnchor: [12, 41],
      //     popupAnchor: [1, -34],
      //     shadowSize: [45, 45],
      //   });
      //   const greenIcon = new L.Icon({
      //     iconUrl:
      //       // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //       // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //       // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //       "/img/schedule/greenIcon.png",
      //     shadowUrl:
      //       // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //       "https://www.vilageo.com/images/marker-shadow.png",
      //     iconSize: [45, 45],
      //     iconAnchor: [12, 41],
      //     popupAnchor: [1, -34],
      //     shadowSize: [45, 45],
      //   });

      //   for (index = 0; index < p.spotListinfoFilter1.length; index++) {
      //     let popupmsg = `
      //       <h3>景點名稱:${p.spotListinfoFilter1[index].name}</h3>
      //       <p>地址: ${p.spotListinfoFilter1[index].address}</p>
      //       開放時間: ${p.spotListinfoFilter1[index].opentime} <br/>
      //       價格: ${p.spotListinfoFilter1[index].ticketprice}<br/>
      //       `;

      //     let marker = L.marker(
      //       [
      //         p.spotListinfoFilter1[index].lat,
      //         p.spotListinfoFilter1[index].lng,
      //       ],
      //       {
      //         icon: redIcon,
      //       }
      //     );
      //     marker.addTo(map).bindPopup(popupmsg);
      //   }
      // }
      // console.log(spotMapLocation.hash);
      // if (spotMapLocation.hash === " ") {
      //   //===============================================================
      //   //1定義變數
      //   //centerlatlng 總和取平均
      //   let layer1;
      //   console.log(p);
      //   for (let i = 0; i < p.spotListinfoFilter1.length; i++) {
      //     // console.log(typeof p.spotListinfo[i].lat);//string?!
      //     sumlat += Number(p.spotListinfoFilter1[i].lat);
      //   }
      //   for (let i = 0; i < p.spotListinfoFilter1.length; i++) {
      //     sumlng += Number(p.spotListinfoFilter1[i].lng);
      //   }
      //   let centerlat = sumlat / p.spotListinfoFilter1.length;
      //   let centerlng = sumlng / p.spotListinfoFilter1.length;
      //   console.log(centerlat, centerlng);
      //   //centerlatlng 取最大最小取平均
      //   // console.log(typeof lat);
      //   //===============================================================
      //   //2 map 初始化、匯入圖磚
      //   function initializeMap(lator, lonor, markers) {
      //     // map.setView(L.latLng(lator, lonor));
      //     map.setView([centerlat, centerlng], 10.5);
      //   }
      //   initializeMap(centerlat, centerlng);
      //   console.log(centerlat, centerlng);
      //   //tag
      //   layer1 = L.tileLayer(
      //     "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      //     {
      //       attribution:
      //         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      //     }
      //   );
      //   map.addLayer(layer1);
      //   //===============================================================
      //   //3標記點 加入
      //   let index;
      //   //icon、popup
      //   const redIcon = new L.Icon({
      //     iconUrl:
      //       // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //       // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //       // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //       // "https://cdn-icons-png.flaticon.com/512/727/727598.png",
      //       "/img/schedule/redIcon.png",
      //     shadowUrl:
      //       // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //       "https://www.vilageo.com/images/marker-shadow.png",
      //     iconSize: [45, 45],
      //     iconAnchor: [12, 41],
      //     popupAnchor: [1, -34],
      //     shadowSize: [45, 45],
      //   });
      //   const orangeIcon = new L.Icon({
      //     iconUrl:
      //       // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //       // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //       // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //       "/img/schedule/orangeIcon.png",
      //     shadowUrl:
      //       // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //       "https://www.vilageo.com/images/marker-shadow.png",
      //     iconSize: [45, 45],
      //     iconAnchor: [12, 41],
      //     popupAnchor: [1, -34],
      //     shadowSize: [45, 45],
      //   });
      //   const greenIcon = new L.Icon({
      //     iconUrl:
      //       // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //       // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //       // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //       "/img/schedule/greenIcon.png",
      //     shadowUrl:
      //       // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //       "https://www.vilageo.com/images/marker-shadow.png",
      //     iconSize: [45, 45],
      //     iconAnchor: [12, 41],
      //     popupAnchor: [1, -34],
      //     shadowSize: [45, 45],
      //   });

      //   for (index = 0; index < p.spotListinfoFilter1.length; index++) {
      //     let popupmsg = `
      //       <h3>景點名稱:${p.spotListinfoFilter1[index].name}</h3>
      //       <p>地址: ${p.spotListinfoFilter1[index].address}</p>
      //       開放時間: ${p.spotListinfoFilter1[index].opentime} <br/>
      //       價格: ${p.spotListinfoFilter1[index].ticketprice}<br/>
      //       `;

      //     let marker = L.marker(
      //       [
      //         p.spotListinfoFilter1[index].lat,
      //         p.spotListinfoFilter1[index].lng,
      //       ],
      //       {
      //         icon: redIcon,
      //       }
      //     );
      //     marker.addTo(map).bindPopup(popupmsg);
      //   }
      // }
      // if (spotMapLocation.hash === "#Day1") {
      //   //1定義變數
      //   //centerlatlng 總和取平均
      //   let layer1;
      //   console.log(p);
      //   for (let i = 0; i < p.spotListinfoFilter1.length; i++) {
      //     // console.log(typeof p.spotListinfo[i].lat);//string?!
      //     sumlat += Number(p.spotListinfoFilter1[i].lat);
      //   }
      //   for (let i = 0; i < p.spotListinfoFilter1.length; i++) {
      //     sumlng += Number(p.spotListinfoFilter1[i].lng);
      //   }
      //   let centerlat = sumlat / p.spotListinfoFilter1.length;
      //   let centerlng = sumlng / p.spotListinfoFilter1.length;
      //   console.log(centerlat, centerlng);
      //   //centerlatlng 取最大最小取平均
      //   // console.log(typeof lat);
      //   //===============================================================
      //   //2 map 初始化、匯入圖磚
      //   function initializeMap(lator, lonor, markers) {
      //     // map.setView(L.latLng(lator, lonor));
      //     map.setView([centerlat, centerlng], 10.5);
      //   }
      //   initializeMap(centerlat, centerlng);
      //   console.log(centerlat, centerlng);
      //   //tag
      //   layer1 = L.tileLayer(
      //     "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      //     {
      //       attribution:
      //         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      //     }
      //   );
      //   map.addLayer(layer1);
      //   //===============================================================
      //   //3標記點 加入
      //   let index;
      //   //icon、popup
      //   const redIcon = new L.Icon({
      //     iconUrl:
      //       // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //       // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //       // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //       // "https://cdn-icons-png.flaticon.com/512/727/727598.png",
      //       "/img/schedule/redIcon.png",
      //     shadowUrl:
      //       // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //       "https://www.vilageo.com/images/marker-shadow.png",
      //     iconSize: [45, 45],
      //     iconAnchor: [12, 41],
      //     popupAnchor: [1, -34],
      //     shadowSize: [45, 45],
      //   });
      //   const orangeIcon = new L.Icon({
      //     iconUrl:
      //       // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //       // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //       // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //       "/img/schedule/orangeIcon.png",
      //     shadowUrl:
      //       // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //       "https://www.vilageo.com/images/marker-shadow.png",
      //     iconSize: [45, 45],
      //     iconAnchor: [12, 41],
      //     popupAnchor: [1, -34],
      //     shadowSize: [45, 45],
      //   });
      //   const greenIcon = new L.Icon({
      //     iconUrl:
      //       // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //       // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //       // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //       "/img/schedule/greenIcon.png",
      //     shadowUrl:
      //       // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //       "https://www.vilageo.com/images/marker-shadow.png",
      //     iconSize: [45, 45],
      //     iconAnchor: [12, 41],
      //     popupAnchor: [1, -34],
      //     shadowSize: [45, 45],
      //   });

      //   for (index = 0; index < p.spotListinfoFilter1.length; index++) {
      //     let popupmsg = `
      //       <h3>${p.spotListinfoFilter1[index].name}</h3>
      //       地址: ${p.spotListinfoFilter1[index].address}<br/>
      //       開放時間: ${p.spotListinfoFilter1[index].opentime} <br/>
      //       價格: ${p.spotListinfoFilter1[index].ticketprice}.NT<br/>
      //       `;

      //     let marker = L.marker(
      //       [
      //         p.spotListinfoFilter1[index].lat,
      //         p.spotListinfoFilter1[index].lng,
      //       ],
      //       {
      //         icon: redIcon,
      //       }
      //     );
      //     marker.addTo(map).bindPopup(popupmsg);
      //   }
      // }
      //  if (spotMapLocation.hash === "#Day1") {
      //    //===============================================================
      //    //1定義變數
      //    //centerlatlng 總和取平均
      //    let layer1;
      //    console.log(p);
      //    for (let i = 0; i < p.spotListinfoFilter1.length; i++) {
      //      // console.log(typeof p.spotListinfo[i].lat);//string?!
      //      sumlat += Number(p.spotListinfoFilter1[i].lat);
      //    }
      //    for (let i = 0; i < p.spotListinfoFilter1.length; i++) {
      //      sumlng += Number(p.spotListinfoFilter1[i].lng);
      //    }
      //    let centerlat = sumlat / p.spotListinfoFilter1.length;
      //    let centerlng = sumlng / p.spotListinfoFilter1.length;
      //    console.log(centerlat, centerlng);
      //    //centerlatlng 取最大最小取平均
      //    // console.log(typeof lat);
      //    //===============================================================
      //    //2 map 初始化、匯入圖磚
      //    function initializeMap(lator, lonor, markers) {
      //      // map.setView(L.latLng(lator, lonor));
      //      map.setView([centerlat, centerlng], 13);
      //    }
      //    initializeMap(centerlat, centerlng);
      //    console.log(centerlat, centerlng);
      //    //tag
      //    layer1 = L.tileLayer(
      //      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      //      {
      //        attribution:
      //          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      //      }
      //    );
      //    map.addLayer(layer1);
      //    //===============================================================
      //    //3標記點 加入
      //    let index;
      //    //icon、popup
      //    const redIcon = new L.Icon({
      //      iconUrl:
      //        // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //        // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //        // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //        // "https://cdn-icons-png.flaticon.com/512/727/727598.png",
      //        "/img/schedule/redIcon.png",
      //      shadowUrl:
      //        // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //        "https://www.vilageo.com/images/marker-shadow.png",
      //      iconSize: [45, 45],
      //      iconAnchor: [12, 41],
      //      popupAnchor: [1, -34],
      //      shadowSize: [45, 45],
      //    });
      //    const orangeIcon = new L.Icon({
      //      iconUrl:
      //        // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //        // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //        // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //        "/img/schedule/orangeIcon.png",
      //      shadowUrl:
      //        // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //        "https://www.vilageo.com/images/marker-shadow.png",
      //      iconSize: [45, 45],
      //      iconAnchor: [12, 41],
      //      popupAnchor: [1, -34],
      //      shadowSize: [45, 45],
      //    });
      //    const greenIcon = new L.Icon({
      //      iconUrl:
      //        // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      //        // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
      //        // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
      //        "/img/schedule/greenIcon.png",
      //      shadowUrl:
      //        // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      //        "https://www.vilageo.com/images/marker-shadow.png",
      //      iconSize: [45, 45],
      //      iconAnchor: [12, 41],
      //      popupAnchor: [1, -34],
      //      shadowSize: [45, 45],
      //    });

      //    for (index = 0; index < p.spotListinfoFilter1.length; index++) {
      //      let popupmsg = `
      //       <h3>景點名稱:${p.spotListinfoFilter1[index].name}</h3>
      //       <p>地址: ${p.spotListinfoFilter1[index].address}</p>
      //       開放時間: ${p.spotListinfoFilter1[index].opentime} <br/>
      //       價格: ${p.spotListinfoFilter1[index].ticketprice}<br/>
      //       `;

      //      let marker = L.marker(
      //        [
      //          p.spotListinfoFilter1[index].lat,
      //          p.spotListinfoFilter1[index].lng,
      //        ],
      //        {
      //          icon: redIcon,
      //        }
      //      );
      //      marker.addTo(map).bindPopup(popupmsg);
      //    }
      //  }
      if (spotMapLocation.hash === "#Day1") {
        //===============================================================
        //1定義變數
        //centerlatlng 總和取平均
        let layer1;
        console.log(p);
        for (let i = 0; i < p.spotListinfoFilter1.length; i++) {
          // console.log(typeof p.spotListinfo[i].lat);//string?!
          sumlat += Number(p.spotListinfoFilter1[i].lat);
        }
        for (let i = 0; i < p.spotListinfoFilter1.length; i++) {
          sumlng += Number(p.spotListinfoFilter1[i].lng);
        }
        let centerlat = sumlat / p.spotListinfoFilter1.length;
        let centerlng = sumlng / p.spotListinfoFilter1.length;
        console.log(centerlat, centerlng);
        //centerlatlng 取最大最小取平均
        // console.log(typeof lat);
        //===============================================================
        //2 map 初始化、匯入圖磚
        function initializeMap(lator, lonor, markers) {
          // map.setView(L.latLng(lator, lonor));
          map.setView([centerlat, centerlng], 13);
        }
        initializeMap(centerlat, centerlng);
        console.log(centerlat, centerlng);
        //tag
        layer1 = L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          }
        );
        map.addLayer(layer1);
        //===============================================================
        //3標記點 加入
        let index;
        //icon、popup
        const redIcon = new L.Icon({
          iconUrl:
            // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
            // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
            // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
            // "https://cdn-icons-png.flaticon.com/512/727/727598.png",
            "/img/schedule/redIcon.png",
          shadowUrl:
            // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            "https://www.vilageo.com/images/marker-shadow.png",
          iconSize: [45, 45],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [45, 45],
        });
        const orangeIcon = new L.Icon({
          iconUrl:
            // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
            // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
            // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
            "/img/schedule/orangeIcon.png",
          shadowUrl:
            // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            "https://www.vilageo.com/images/marker-shadow.png",
          iconSize: [45, 45],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [45, 45],
        });
        const greenIcon = new L.Icon({
          iconUrl:
            // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
            // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
            // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
            "/img/schedule/greenIcon.png",
          shadowUrl:
            // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            "https://www.vilageo.com/images/marker-shadow.png",
          iconSize: [45, 45],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [45, 45],
        });

        for (index = 0; index < p.spotListinfoFilter1.length; index++) {
          let popupmsg = `
            <h3>景點名稱:${p.spotListinfoFilter1[index].name}</h3>
            <p>地址: ${p.spotListinfoFilter1[index].address}</p>
            開放時間: ${p.spotListinfoFilter1[index].opentime} <br/>
            價格: ${p.spotListinfoFilter1[index].ticketprice}<br/>
            `;

          let marker = L.marker(
            [
              p.spotListinfoFilter1[index].lat,
              p.spotListinfoFilter1[index].lng,
            ],
            {
              icon: redIcon,
            }
          );
          marker.addTo(map).bindPopup(popupmsg);
        }
      }

      if (spotMapLocation.hash === "#Day2") {
        //1定義變數

        let L = window.L;
        //centerlatlng 總和取平均
        let layer1;
        //  var sumlat = 0;
        //  var sumlng = 0;
        console.log(p);
        for (let i = 0; i < p.spotListinfoFilter2.length; i++) {
          // console.log(typeof p.spotListinfo[i].lat);//string?!
          sumlat += Number(p.spotListinfoFilter2[i].lat);
        }
        for (let i = 0; i < p.spotListinfoFilter2.length; i++) {
          sumlng += Number(p.spotListinfoFilter2[i].lng);
        }
        let centerlat = sumlat / p.spotListinfoFilter2.length;
        let centerlng = sumlng / p.spotListinfoFilter2.length;
        console.log(centerlat, centerlng);

        //centerlatlng 取最大最小取平均
        // console.log(typeof lat);
        //===============================================================
        //2 map 初始化、匯入圖磚
        function initializeMap(lator, lonor, markers) {
          // map.setView(L.latLng(lator, lonor));
          map.setView([centerlat, centerlng], 9);
        }
        initializeMap(centerlat, centerlng);
        console.log(centerlat, centerlng);
        //tag

        layer1 = L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          }
        );

        map.addLayer(layer1);

        //===============================================================
        //3標記點 加入

        let index;
        //icon、popup

        const redIcon = new L.Icon({
          iconUrl:
            // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
            // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
            // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
            // "https://cdn-icons-png.flaticon.com/512/727/727598.png",
            "/img/schedule/redIcon.png",
          shadowUrl:
            // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            "https://www.vilageo.com/images/marker-shadow.png",
          iconSize: [45, 45],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [45, 45],
        });
        const orangeIcon = new L.Icon({
          iconUrl:
            // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
            // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
            // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
            "/img/schedule/orangeIcon.png",
          shadowUrl:
            // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            "https://www.vilageo.com/images/marker-shadow.png",
          iconSize: [45, 45],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [45, 45],
        });
        const greenIcon = new L.Icon({
          iconUrl:
            // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
            // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
            // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
            "/img/schedule/greenIcon.png",
          shadowUrl:
            // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            "https://www.vilageo.com/images/marker-shadow.png",
          iconSize: [45, 45],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [45, 45],
        });
        // const blueIcon = new L.Icon({
        //   iconUrl:
        //     // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        //     // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
        //     // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
        //     "img/schedule/blueIcon.png",
        //   shadowUrl:
        //     // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        //     "https://www.vilageo.com/images/marker-shadow.png",
        //   iconSize: [45, 45],
        //   iconAnchor: [12, 41],
        //   popupAnchor: [1, -34],
        //   shadowSize: [45, 45],
        // });

        ////for marker v1
        // for (let index = 0; index < p.spotListinfo.length; index++) {
        //   let marker = new L.marker(
        //     new L.latLng([p.spotListinfo[index].lat, p.spotListinfo[index].lng], {
        //       icon: redIcon,
        //     })
        //   );

        //   map.addLayer(marker);
        // }

        for (index = 0; index < p.spotListinfoFilter2.length; index++) {
          let popupmsg = `
                  <h3>景點名稱:${p.spotListinfoFilter2[index].name}</h3>
                  <p>地址: ${p.spotListinfoFilter2[index].address}</p>
                  開放時間: ${p.spotListinfoFilter2[index].opentime} <br/>
                  價格: ${p.spotListinfoFilter2[index].ticketprice}<br/>
                  `;

          let marker = L.marker(
            [
              p.spotListinfoFilter2[index].lat,
              p.spotListinfoFilter2[index].lng,
            ],
            {
              icon: orangeIcon,
            }
          );
          marker.addTo(map).bindPopup(popupmsg);
        }
      }
      if (spotMapLocation.hash === "#Day3") {
        //===============================================================
        //1定義變數
        //  let L = window.L;
        //centerlatlng 總和取平均
        let layer1;
        //  var sumlat = 0;
        //  var sumlng = 0;
        console.log(p);
        for (let i = 0; i < p.spotListinfoFilter3.length; i++) {
          // console.log(typeof p.spotListinfo[i].lat);//string?!
          sumlat += Number(p.spotListinfoFilter3[i].lat);
        }
        for (let i = 0; i < p.spotListinfoFilter3.length; i++) {
          sumlng += Number(p.spotListinfoFilter3[i].lng);
        }
        let centerlat = sumlat / p.spotListinfoFilter3.length;
        let centerlng = sumlng / p.spotListinfoFilter3.length;
        console.log(centerlat, centerlng);

        //centerlatlng 取最大最小取平均
        // console.log(typeof lat);
        //===============================================================
        //2 map 初始化、匯入圖磚
        function initializeMap(lator, lonor, markers) {
          // map.setView(L.latLng(lator, lonor));
          map.setView([centerlat, centerlng], 13);
        }
        initializeMap(centerlat, centerlng);
        console.log(centerlat, centerlng);
        //tag

        layer1 = L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          }
        );

        map.addLayer(layer1);

        //===============================================================
        //3標記點 加入

        let index;
        //icon、popup

        const redIcon = new L.Icon({
          iconUrl:
            // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
            // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
            // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
            // "https://cdn-icons-png.flaticon.com/512/727/727598.png",
            "/img/schedule/redIcon.png",
          shadowUrl:
            // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            "https://www.vilageo.com/images/marker-shadow.png",
          iconSize: [45, 45],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [45, 45],
        });
        const orangeIcon = new L.Icon({
          iconUrl:
            // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
            // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
            // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
            "/img/schedule/orangeIcon.png",
          shadowUrl:
            // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            "https://www.vilageo.com/images/marker-shadow.png",
          iconSize: [45, 45],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [45, 45],
        });
        const greenIcon = new L.Icon({
          iconUrl:
            // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
            // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
            // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
            "/img/schedule/greenIcon.png",
          shadowUrl:
            // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            "https://www.vilageo.com/images/marker-shadow.png",
          iconSize: [45, 45],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [45, 45],
        });
        // const blueIcon = new L.Icon({
        //   iconUrl:
        //     // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        //     // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
        //     // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
        //     "img/schedule/blueIcon.png",
        //   shadowUrl:
        //     // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        //     "https://www.vilageo.com/images/marker-shadow.png",
        //   iconSize: [45, 45],
        //   iconAnchor: [12, 41],
        //   popupAnchor: [1, -34],
        //   shadowSize: [45, 45],
        // });

        ////for marker v1
        // for (let index = 0; index < p.spotListinfo.length; index++) {
        //   let marker = new L.marker(
        //     new L.latLng([p.spotListinfo[index].lat, p.spotListinfo[index].lng], {
        //       icon: redIcon,
        //     })
        //   );

        //   map.addLayer(marker);
        // }

        for (index = 0; index < p.spotListinfoFilter3.length; index++) {
          let popupmsg = `
                  <h3>景點名稱:${p.spotListinfoFilter3[index].name}</h3>
                  <p>地址: ${p.spotListinfoFilter3[index].address}</p>
                  開放時間: ${p.spotListinfoFilter3[index].opentime} <br/>
                  價格: ${p.spotListinfoFilter3[index].ticketprice}<br/>
                  `;

          let marker = L.marker(
            [
              p.spotListinfoFilter3[index].lat,
              p.spotListinfoFilter3[index].lng,
            ],
            {
              icon: greenIcon,
            }
          );
          marker.addTo(map).bindPopup(popupmsg);
        }
      }
      // ==========================================================
    }; //end   mapping = () => {

    // ============================
    // // get the div block
    // var divBlock = document.getElementById("2");

    // // // add the event listener
    // divBlock.addEventListener("mouseenter", function () {
    //   marker.openPopup();
    // });
    // =============================================================================

    // this["marker" + index] = L.marker(
    //   [p.spotListinfo[index].lat, p.spotListinfo[index].lng],
    //   {
    //     icon: redIcon,
    //   }
    // );
    // this["marker" + index].addTo(map).bindPopup(popupmsg);

    // // get the div block
    // var divBlock = document.getElementById("2");

    // // add the event listener
    // divBlock.addEventListener("mouseenter", function () {
    //   this["marker" + index].openPopup();
    // });

    //    divBlock.addEventListener("mouseenter", function () {
    // marker.openPopup();
    // .openPopup();
    // }
    // L.marker([p.spotListinfo[index].lat, p.spotListinfo[index].lng], {
    //   icon: redIcon,
    // }).addTo(map);

    // ======================

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
  // isload = 1;
  return (
    // isload || (
    //   <div id="Spotmap" style={{ width: "70%" }} key={p.spotListinfo}>
    //     {/* {mapping()} */}
    //   </div>
    // )
    <div
      id="Spotmap"
      style={{ width: "100%", zIndex: "1" }}
      // key={p.spotListinfo}
      key={new Date().getTime()}
    >
      {/* {mapping()} */}
    </div>

    //
  );
}
