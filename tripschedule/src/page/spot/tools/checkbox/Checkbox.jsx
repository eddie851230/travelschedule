import "bootstrap/dist/css/bootstrap.min.css";
import "./Checkbox.css";
import React, { useState, useEffect } from 'react';
// import axios from 'axios';


const userData = [
    { name: "遊樂園", value: 1 },
    { name: "自然園區", value: 2 },
    { name: "美食", value: 3 },
    { name: "購物", value: 4 },
    { name: "知識", value: 5 },
    { name: "動物園", value: 6 },
    { name: "神社", value: 7 },
    { name: "古蹟", value: 8 },
    { name: "景觀", value: 9 }
];

function Checkbox() {

    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        setUsers(userData.map(user => ({ ...user, isChecked: true })));
    }, []);


    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempUser = users.map((user) => {
                return { ...user, isChecked: checked };
            });
            setUsers(tempUser);
        } else {
            let tempUser = users.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );
            setUsers(tempUser);
        }
    };
    console.log(users)
    return (
        <div className="container my-4" style={{ width: "200px" }}>
            <form className="form w-100">
                <h3>篩選器:</h3>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="allSelect"
                        style={{ backgroundColor: "rgb(254, 218, 2)" }}

                        // checked={
                        //   users.filter((user) => user?.isChecked !== true).length < 1
                        // }
                        checked={!users.some((user) => user?.isChecked !== true)}
                        onChange={handleChange}
                    />
                    <label className="form-check-label ms-2">全選</label>
                </div>
                {users.map((user, index) => (
                    <div className="form-check" key={index}>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name={user.name}
                            checked={user?.isChecked || false}
                            onChange={handleChange}
                            style={{ backgroundColor: "rgb(254, 218, 2)" }}
                        />
                        <label className="form-check-label ms-2">{user.name}</label>
                    </div>
                ))}
            </form>
        </div>
    );
}
export default Checkbox;