import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
import { http } from '../../WebAPI';
const GoogleLogin = () => {

    const navigate = useNavigate();

     // 取得email
     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
 
    
     console.log("location",location)

    console.log('searchParams',searchParams);

     // 從url取得參數
     const state = searchParams.get('state');
     const authuser=searchParams.get('authuser')
     const code=searchParams.get('code')
     const token=searchParams.get('access_token')
     
     

     console.log("state",state)
     console.log("code",code)
     console.log("authuser",authuser)


    const googleConfig = {
        clientId: "250841553348-5e2n3s3tv4nr5j4n57ardiep8joscr6m.apps.googleusercontent.com",
        state:state,
        responseType: "code",
        endpoints: {
            token: "/auth/google/callback",
            userInfo: "/user",
        },
        grantType: "authorization_code",
    };


    // const handleGoogleLogin = () => {
    // try {
    //     http.post(googleConfig.endpoints.token, {
    //         clientId: googleConfig.clientId,
    //         codeChallengeMethod: googleConfig.codeChallengeMethod,
    //         responseType: googleConfig.responseType,
    //         grantType: googleConfig.grantType,
    //         withCredentials: false
    //     });
    //     const userInfo = axios.get(googleConfig.endpoints.userInfo);
    //     console.log(userInfo)
    // } catch (error) {
    //     console.error(error);
    // }

    const [data, setData] = useState({});

    // useEffect(() => {

    //     axios.post(googleConfig.endpoints.token, {
    //         clientId: googleConfig.clientId,
    //         codeChallengeMethod: googleConfig.codeChallengeMethod,
    //         responseType: googleConfig.responseType,
    //         grantType: googleConfig.grantType,
    //         headers: {
    //             accept: 'application/json',
    //             withCredentials: false,
    //         }
    //     })
    //         .then(response => {

    //             setData(response.data);
    //             console.log(data)
    //         })
    //         .catch(error => {
    //             alert(error)
    //             console.error(error);
    //         });
    // }, [location.search]);


    const test=()=>{
        // http.post(googleConfig.endpoints.token, {
        //     state:state,
        //     headers: {
        //         accept: 'application/json',
        //         withCredentials: false,
        //     }
        // })
        //     .then(response => {

        //         setData(response.data);
        //         console.log(data)
        //     })
        //     .catch(error => {
        //         alert(error)
        //         console.error(error);
        //     });
        http.get(googleConfig.endpoints.token,{ headers: {
                    accept: 'application/json',
                    // withCredentials: false,
                }}).then((res)=>console.log('res',res))
    }

    return (<><button onClick={test} width="100px" height="100px">測試</button></>);
}

export default GoogleLogin;