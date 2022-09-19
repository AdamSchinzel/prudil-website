import React from "react";
import SectionTitle from "../SectionTitle";
import "./style.scss";

const Where = ({ title, subTitle, className }) => {
  return (
    <div className={className} id="kde-nas-najdete">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title={title} subTitle={subTitle} />
          </div>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="map1"
                width="600"
                height="450"
                style={{ border: "none" }}
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?q=Ba%C5%A1ty%20416%2F8&key=AIzaSyBi8XH7TzBpEdcWdMg6PKGL8lp_hr-LCu4"></iframe>
            </div>
          </div>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="map2"
                width="600"
                style={{ border: "none" }}
                height="450"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/search?q=Parkovi%C5%A1t%C4%9B%20Ba%C5%A1ty&key=AIzaSyBi8XH7TzBpEdcWdMg6PKGL8lp_hr-LCu4"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Where;
