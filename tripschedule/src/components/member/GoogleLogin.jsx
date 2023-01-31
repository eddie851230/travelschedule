import { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { http } from '../../WebAPI';
import { setAuthTokenlimter } from '../../utils';
import styled from 'styled-components';
import AuthContext from 'contexts';
import { memberapi } from '../../WebAPI';

const GoogleLogin = () => {

    const navigate = useNavigate();
    // 裝飾
    const Shownone = styled.h3`
width:70vw;
text-align:center;
margin:15%;
`

    // 取得email
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);


    // 從url取得參數
    const code = searchParams.get('code');
    const clientId = "250841553348-5e2n3s3tv4nr5j4n57ardiep8joscr6m.apps.googleusercontent.com";
    console.log(code)

    //將會員資料加入browser中
    const {setUser} = useContext(AuthContext);

    useEffect(() => {


        http.post('/auth/google/callback?code=' + code, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `client_id=${clientId}&grant_type=authorization_code`
        })
            .then((res) => {
                setAuthTokenlimter(res.data.access_token);
                memberapi().then(res => {
                    setUser(res.data);

                    if(res.data){
                        // 導到首頁 
                        return navigate("/");
                    }
                })
            })
            .catch(err => console.log(err));

    }, [])


    return (<Shownone><b>登入驗證中，請稍後...</b></Shownone>);
}

export default GoogleLogin;