import axios from "axios";
import { getAuthToken} from "./utils";


// axios預設值
export const http = axios.create({
    baseURL: "http://localhost:8000",
    header: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        
    },
    withCredentials: true,
});


// 登入
export const loginapi = (email, password) => {

// sanctum
    return http.post(`/api/login`, {

        email: email,
        password: password

    }).then((res) => res).catch((error) => error.response.status);

// fortify
    // return http.post(`/login`, {

    //     email: email,
    //     password: password

    // }).then((res) => res).catch((error) => error.response.status);

};

// 身分驗證
export const memberapi = () => {
    // 從 localStorage 拿取 token
    const token = getAuthToken();

    return http.get(`/api/user`, {
        headers: {
            authorization: `Bearer ${token}`
        },
    }).then((res) => res).catch((error) => error
    // .response.status
    );
};
// export const cookiesapi = () => {
//     // 從 cookies 拿取 token
//     const token = getAuthTokenCookies();

//     return http.get(`/api/user`, {
//         headers: {
//             authorization: `Bearer ${token}`
//         },
//     }).then((res) => res).catch((error) => error
//     // .response.status
//     );
// };

