import React from "react";
import logo from "../../images/logo/logo.png";
import "./style.scss";

const HeaderBottom = (props) => {
  return (
    <div className={props.className}>
      <div className="container">
        <div className="headerBottomMainWrapper">
          <div className="row headerRow">
            <div className="col-lg-3 col-md-10 col-sm-6 col-8">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className={"col-lg-8 responsiveWrapper"}>
              <ul className="mainMenuWrap">
                <li>
                  <a href="/#zamereni">Zaměření</a>
                </li>
                <li>
                  <a href="/#odmena">Odměna</a>
                </li>
                <li>
                  <a href="/#kolektiv">Kolektiv</a>
                </li>
                <li>
                  <a href="/#clanky">Články</a>
                </li>
                <li>
                  <a href="/#partneri">Partneři</a>
                </li>
                <li>
                  <a href="/#kde-nas-najdete">Kde nás najdete</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBottom;
