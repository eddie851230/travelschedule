// import Cookies from "universal-cookie";

//cookie
// const cookies = new Cookies();

// export const setAuthToken = (token) => {
// cookies.set('token', token, 
// { path: '/',secure: true,sameSite :true}
// );

// };

// export const getAuthToken = () => {
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