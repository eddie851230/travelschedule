import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import AuthContext from '../../contexts';
import { http } from '../../WebAPI';

const Setting = () => {
    const Button = styled.button`
    width:30%;
    height:fit-content;
    padding:0px;

    `;
    // 判斷是否有會員登入中
    const { user } = useContext(AuthContext);

    // 興趣列表
    const [interst] = useState(
        [{
            name: "親近自然",
            value: 1
        }, {
            name: "歷史人文",
            value: 2
        },
        {
            name: "尋找刺激",
            value: 3
        },
        {
            name: "美食",
            value: 4
        },
        {
            name: "歡樂",
            value: 5
        },
        {
            name: "學習新知",
            value: 6
        }
        ]
    )
    // 取得會員原本就有的資料
    const [check, setCheck] = useState([])
    useEffect(() => {
        http.get('/collect').then((response) => {
            let newArray = response.data.filter(({ user_id }) => {
                return user_id === user.id
            })
            let newSetting = newArray.map(element => element.attraction_id);
            return setCheck(newSetting)
           
        }).catch(() => "無法找到");

    }, []);

    // 以上表單上傳至laravel
    const [edit, setEdit] = useState(false);
    const handleEdit = async() => {
        if (edit === false) {
            setEdit(true);
        } else {
            // 暱稱
            http.post('/memberUpdate',{
                name:nikcname,
                user:user.id
            }).then(res=> user.name=nikcname)
            .catch(err => console.log(err))
            // 興趣列表
            http.post('/addCollection', {
                attraction_id: check,
                user: user.id
            }).then(res => console.log(res))
                .catch(err => console.log(err))
            setEdit(false);
        }
    }

 
    const handleChecked = (e) => {
        const value = parseInt(e.target.value)
        if (e.target.checked === true) {
            setCheck([...check,value])
        

        } else {
            let newArr=check.filter(e => e!==parseInt(value))
            setCheck(newArr);
   
        }
    }

    // 設定暱稱的寫法
    const [nikcname,setNickname]=useState(user.name);
   
    return (
        <div className="setting">
            <div className="settingTitle">設定</div>
            <main>
                <div className="username">
                    <div className="nameTitle">暱稱</div>
                    {!edit && <div className="nameDiv">{nikcname}</div>}
                    {edit && <input className="nameDiv" onChange={e=>setNickname(e.target.value)} value={nikcname}/>}
                </div>
                <hr />

                {/* <!-- 使用者ID --> */}
                <div className="userID">
                    <div className="iDTitle">Email</div>
                    <div className="idNum">{user.email}</div>
                </div>
                <hr />
                {/* <!-- 大頭貼 -->*/}
                {/* <div className="loginway">
                    <div className="loginTitle">登入方式</div>
                    <div className="way"><img src="/img/景點相片預覽(暗色).jpg" alt="" /></div>
                </div> */}
                <hr />
                {/* <!-- 興趣偏好 --> */}
                <div className="interst"><div className="interstTitle">興趣偏好</div>

                    <div>
                        {interst.map(({ name, value }) => {
                            return (
                                <label className="container" key={value}>{name} 
                                    <input type="checkbox" name="interst" value={value} 
                                    onChange={handleChecked} 
                                    disabled={edit ? false : true}
                                    checked={check.includes(value) ? true : false}
                                    
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            )
                        })}
                    </div>

                </div>

            </main>
            <Button onClick={handleEdit}>{edit ?"完成" : "編輯"}</Button>
        </div>
    )
}

export default Setting;
