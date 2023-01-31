import movies from "../../../movies.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./settings";
import "./test.css";

function HotspotRow() {
  return (
    <div className="hotspotRow">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div className="wraprow">
            <img src={movie.url} />
            <div className="rowHotSpotP">
            <p>{movie.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HotspotRow;


