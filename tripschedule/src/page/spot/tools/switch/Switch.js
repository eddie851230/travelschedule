import React from "react";
import cx from "classnames";
import "./Switch.css";
const Switch = ({ rounded = false, isToggled, onToggled }) => {
    const sliderCX = cx("slider",{
        rounded: rounded
    });

    return (
        <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggled} />
            <span className={sliderCX}/>
        </label>
    );
};

export default Switch;