// src/SpotMap.js
import React, { Component } from "react";
// import "./LeafletMap.css";
// import axios from "axios";

export default class Spotmap extends Component {
  //#region
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
  //#endregion
  //methods
  //-----------------------------------------------------------------

  //hooks
  //-----------------------------------------------------------------
  componentDidMount() {
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
    // console.log(this.props.loadDataAsync);
    this.props.loadDataAsync();
    console.log(this.props.spotListinfo);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   // let L = window.L;
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

  static getDerivedStateFromProps(nextProps, prevState) {
    // let L = window.L;
    // if (prevState.dataLoaded) {
    //   let first10Spot = prevState.data["features"].slice(0, 10);
    //   for (let Spot of first10Spot) {
    //     let coordiantes = Spot["geometry"]["coordinates"];
    // coordiantes = [coordiantes[1], coordiantes[0]];
    // let marker = new L.marker(new L.latLng(coordiantes));
    // let popupmsg = `
    //         景點名稱: ${this.props.spotListinfo}<br/>
    //         地址: ${this.props.spotListinfo}<br/>
    //         開放時間: ${this.props.spotListinfo} <br/>
    //         價格: ${this.prspotListinfo}<br/>

    //         `;

    // marker.bindPopup(popupmsg);
    // prevState.map.addLayer(marker);
    //   }
    // }
    return null;
  }

  render() {
    return (
      <div id="Spotmap" style={{ width: "70%" }}>
        {/* {console.log(this.props)} */}
      </div>
    );
  }
}
