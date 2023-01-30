// import Cookies from "universal-cookie";

// //cookie
// const cookies = new Cookies();

// export const setAuthTokenCookies = (token) => {
// cookies.set('token', token, 
// { path: '/',secure: true,sameSite :true, expires: new Date(Date.now()+21600000)}
// // 設定六小時後自動登出
// );

// };

// export const getAuthTokenCookies = () => {
// if (cookies.get('token')===undefined){
//   return '';
// }

// return cookies.get('token');
// };



// export const isLogin=(Req=null)=>{
//     if(!Req){ return !! cookies.get('token')};
//     return !! cookies.parse(Req).token;
// }


// // 將 token 存到 localStorage
export const setAuthToken = (token) => {
  localStorage.setItem("token", token);
};

// 從 localStorage 讀取 token
export const getAuthToken = () => {
  return localStorage.getItem("token");
};

// 有時效性的token
export const setAuthTokenlimter = (token) => {
  localStorage.setItem("token", token);
  setTimeout(()=>{
    localStorage.setItem("token", '');
  },21600000)
  // 六小時候過期
};
