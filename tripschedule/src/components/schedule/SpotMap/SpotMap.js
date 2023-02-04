// src/SpotMap.js
import React, { useEffect } from "react";
// import "./LeafletMap.css";
// import axios from "axios";

export default function Spotmap(p) {
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
      //===============================================================
      //1定義變數

      let L = window.L;
      //centerlatlng 總和取平均
      let layer1;
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
      // console.log(centerlat, centerlng);

      //centerlatlng 取最大最小取平均
      // console.log(typeof lat);
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

      //===========================================
      function initializeMap(lator, lonor, markers) {
        // map.setView(L.latLng(lator, lonor));
        map.setView([centerlat, centerlng], 10.5);
      }
      initializeMap(centerlat, centerlng);
      //tag

      layer1 = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }
      );

      map.addLayer(layer1);
      // console.log(2);

      //===============================================================
      //3標記點 加入

      //icon、popup
      const greenIcon = new L.Icon({
        iconUrl:
          // "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
          // "https://cdn-icons-png.flaticon.com/512/1507/1507187.png",
          // "https://cdn-icons-png.flaticon.com/128/7954/7954340.png",
          "https://cdn-icons-png.flaticon.com/512/727/727598.png",
        shadowUrl:
          // "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          "https://www.vilageo.com/images/marker-shadow.png",
        iconSize: [45, 45],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [45, 45],
      });

      let index;

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
      for (index = 0; index < p.spotListinfo.length; index++) {
        let popupmsg = `
            <h3>景點名稱:${p.spotListinfo[index].name}</h3>
            <p>地址: ${p.spotListinfo[index].address}</p>
            開放時間: ${p.spotListinfo[index].opentime} <br/>
            價格: ${p.spotListinfo[index].ticketprice}<br/>
            `;

        let marker = L.marker(
          [p.spotListinfo[index].lat, p.spotListinfo[index].lng],
          {
            icon: greenIcon,
          }
        );
        marker.addTo(map).bindPopup(popupmsg);
      }
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
    //     icon: greenIcon,
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
    //   icon: greenIcon,
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
