import React from "react";
import { BiMap, BiPhone } from "react-icons/bi";
import "./style.scss";

const HeaderTop = ({ className }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="headerTopMainWrapper">
          <div className="row headerRow">
            <div className="col-md-3 col-sm-12 col-12 col-lg-5 mb-2">
              <ul className="d-flex accountLoginArea">
                <li>
                  <BiMap color="#c0b596" size="20px" style={{ marginRight: "5px" }} />
                  Bašty 416/8, 602 00, Brno
                </li>
                <a href="tel: +420542210593" className="ml-2">
                  <li>
                    <BiPhone color="#c0b596" size="20px" style={{ marginRight: "5px" }} />
                    +420 542 210 593
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
