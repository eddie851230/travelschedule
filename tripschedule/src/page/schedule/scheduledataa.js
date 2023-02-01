// 景點及飛機的資料
export const initairplaneListinfo = [
    {
        id: "depart",
        dayTime: "morning",
        flyIcon: "/img/樂桃icon.png",
        airportName: "成田機場",
        arrivingTime: "08:00",
        airPlaneName: "樂桃航空",
        addr: "1-1 Furugome, Narita, Chiba 282-0004日本",
        herf: "/Airticket/output/1"
    }];
export  const initSpotListinfo = [
  {
    id: 1,
    name: 1,
    opentime: 1,
    clickrate: 1,
    ticketprice: 1,
    address: 1,
    suggestedtime: 1,
    coordinates: 1,
    lat: 1,
    lng: 1,
    detailed: 1,
  },
  {
    id: 2,
    name: 1,
    opentime: 1,
    clickrate: 1,
    ticketprice: 1,
    address: 1,
    suggestedtime: 1,
    coordinates: 1,
    lat: 1,
    lng: 1,
    detailed: 1,
  },
];
export const spotListinfo = [
    {

        id: "S01",
        dayTime: "morning",
        spotImg: "/img/景點相片預覽(明亮).jpg",
        spotName: "東京鐵塔",
        duringTime: "1小時",
        addr: "1-1 Furugome, Narita, Chiba 282-0004日本",
        href: "/Spot"
    }, {

        id: "S02",
        dayTime: "morning",
        spotImg: "/img/景點相片預覽(暗色).jpg",
        spotName: "東京晴空塔",
        duringTime: "1.5小時",
        addr: "日本東京銀座區富人天堂",
        href: "/Spot"
    }, {

        id: "S03",
        dayTime: "afternoon",
        spotImg: "/img/淺草寺.jpg",
        spotName: "東京淺草寺",
        duringTime: "2小時",
        addr: "日本東京銀座區假鬼假怪逛不了街",
        href: "/Spot"
    }
];

export const hotelListinfo = [
    {

        id: "A01",
        dayTime: "evening",
        spotImg: "/img/淺草寺(維基百科夜景).jpg",
        spotName: "東京淺草寺(晚上)",
        duringTime: "2小時",
        addr: "日本東京銀座區假鬼假怪逛不了街",
        href: "/Spot"
    }
]


export const scheduleList = {
    day1: {
        morning: {
            airplaneinfo: {
                class: 'airplane',
                items: initairplaneListinfo,
            },
            spotinfo: {
                class: 'spot',
                items: spotListinfo,
            }
        }, afternoon: {

            spotinfo: {
                class: 'spot',
                items: spotListinfo,
            },
            hotelinfo: {
                class: 'hotel',
                items: hotelListinfo,
            }
        }
    },
    day2: {
        airplaneinfo: {
            class: 'airplane',
            items: initairplaneListinfo,
        },
        spotinfo: {
            class: 'spot',
            items: spotListinfo,
        },
        hotelinfo: {
            class: 'hotel',
            items: hotelListinfo,
        }
    }
};

export const favoriteList = {
    airplaneinfo: {
        class: 'airplane',
        items: initairplaneListinfo,
    },
    spotinfo: {
        class: 'spot',
        items: spotListinfo,
    }
}

export const columnsFromBackend = {
    favorite:{
        title:"favoriteList",
        item:favoriteList
    },
    schedule:{
        title:"scheduleList",
        item:scheduleList
    }
}