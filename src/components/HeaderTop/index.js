import React from "react";
import "./style.scss";
const HeaderTop = (props) => {
  return (
    <div className={props.className}>
      <div className="container">
        <div className="headerTopMainWrapper">
          <div className="row headerRow">
            <div className="col-md-3 col-sm-12 col-12 col-lg-5">
              <ul className="d-flex accountLoginArea">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>Bašty 416/8, 602 00, Brno
                </li>
                <a href="tel: +420773601593">
                  <li>
                    <i className="fa fa-phone"></i>+420 773 601 593
                  </li>
                </a>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12">
              <div className="btnStyle btnStyle2 text-right">
                <a href="mailto: info@prudil.cz">Napište nám</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
