import React from 'react';
import { UilFacebook, UilTwitter, UilInstagram, UilLine } from "@iconscout/react-unicons";

import "./footer.css";
const Footer=() => {

   
        return (
            <section className="footer">
                <h4>About Us</h4>
                <p>我們可以透過你創建會員時提供的喜好來安排你有興趣的景點<br />
                    你也能透過熱門景點來參考並建立自己的行程表</p>
                <div className="icons">
                    <UilFacebook className="iconsi"/>
                    <UilTwitter className="iconsi"/>
                    <UilInstagram className="iconsi"/>
                    <UilLine className="iconsi"/>
                </div>
            </section>
        );
    
}

export default Footer;