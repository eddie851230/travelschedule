import React from 'react';
import "./video.css";
const Video = () => {
return (
        <section className="home">
            <video src="/mida/tower hight.mp4" preload="auto" autoPlay muted loop type="video/mp4"/>
            <div className="vh">
                <input className="search" type="textinput" />
                <button><i className="uil uil-search-alt"></i></button>
            </div>
        </section>
    );

}

export default Video;