import disney from "../../../../disneyland.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings01 from "./settingsDetail";
import "./scroll.css";

function SpotImg() {
  return (
    <div className="spotImgRow">
      <Slider {...settings01}>
        {disney.map((disneyland) => (
          <div className="rowDetail">
            <img src={disneyland.url} />
             {/* <div className="rowHotSpotP">
             </div> */}
           </div>
        ))}
      </Slider>
    </div>
  );
}

export default SpotImg;
