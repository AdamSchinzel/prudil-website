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
                  <BiMap color="#c0b596" size="20px" style={{ marginRight: "10px" }} />
                  Bašty 416/8, 602 00, Brno
                </li>
                <a href="tel: +420773601593" className="ml-4">
                  <li>
                    <BiPhone color="#c0b596" size="20px" style={{ marginRight: "10px" }} />
                    +420 773 601 593
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
