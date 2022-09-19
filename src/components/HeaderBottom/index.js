import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../images/logo/logo.svg";
import "./style.scss";

const HeaderBottom = ({ className }) => {
  const [responsive, setResponsive] = useState(false);

  const responsiveHandler = () => {
    setResponsive(!responsive);
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className={className}>
      <div className="container">
        <div className="headerBottomMainWrapper">
          <div className="row headerRow">
            <div className="col-lg-3 col-md-10 col-sm-6 col-8">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 responsiveWrapper">
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
            {isTabletOrMobile && (
              <div className="col-lg-1 col-md-2 col-sm-6 col-4">
                <div className="searchMenuWrapper">
                  <div onClick={responsiveHandler} className="responsiveTrigger">
                    <span className="first"></span>
                    <span className="second"></span>
                    <span className="third"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
