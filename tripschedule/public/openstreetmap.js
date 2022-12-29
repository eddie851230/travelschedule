// 模擬資料
const data = [
  { name: "夢時代購物中心", local: [22.595153, 120.306923] },
  { name: "漢神百貨", local: [22.61942, 120.296386] },
  { name: "漢神巨蛋", local: [22.669603, 120.302288] },
  { name: "大統百貨", local: [22.630748, 120.318033] },
];
// 設定地圖中心點與放大倍率
const map = L.map("myMap", {
  center: [22.630748, 120.318033],
  zoom: 13,
});
// 載入圖資
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>         contributors',
}).addTo(map);
// 創建 icon (金色)
const goldIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
// 創建 icon (黑色)
const blackIcon = new L.Icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
// 處理資料
data.forEach((item) => {
  // 夢時代購物中心 icon 顯示金色，其餘則為黑色
  let myIcon;
  if (item.name === "夢時代購物中心") {
    myIcon = goldIcon;
  } else {
    myIcon = blackIcon;
  }
  // 添加標記點
  L.marker(item.local, {
    title: item.name,
    icon: myIcon,
  })
    .addTo(map)
    .bindPopup(`<h1>${item.name}</h1>` + `<p>${item.name}</p>`);
});

document.querySelector(".airplane").addEventListener("mouseenter", function () {

  // 處理資料
  data.forEach((item) => {
    // 夢時代購物中心 icon 顯示金色，其餘則為黑色
    let myIcon;
    if (item.name === "大統百貨") {
      myIcon = goldIcon;
    } else {
      myIcon = blackIcon;
    }
    // 添加標記點
    L.marker(item.local, {
      title: item.name,
      icon: myIcon,
    })
      .addTo(map)
      .bindPopup(`<h1>${item.name}</h1>` + `<p>${item.name}</p>`);
  });
});
