import React from 'react';
import disney from "../../../../disneyland.json";
import "./spotdetailp.css";



const SpotDetailp = () => {
    return (
        <div>
            <div className="disneyL">
                {disney.map((disneyP) => (
                    <div className="">
                        <img src={disneyP.url} />
                        <div className="">
                            <p>{disneyP.p}</p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );

}

export default SpotDetailp;