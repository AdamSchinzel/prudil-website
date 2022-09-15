import React from "react";
import logo from "../../images/logo/logo.png";
import "./style.scss";
const footerLinks = [
  {
    title: "Menu",
    menus: [
      { name: "Zaměření", route: "#zamereni" },
      { name: "Odměna", route: "#odmena" },
      { name: "Kolektiv", route: "#kolektiv" },
      { name: "Články", route: "#clanky" },
      { name: "Partneři", route: "#partneri" },
      { name: "Kde nás najdete", route: "#kde-nas-najdete" },
    ],
  },
  {
    title: "Kontakt",
    menus: [
      { name: "AK Prudil a spol., s.r.o." },
      { name: "Bašty 416/8, 602 00, Brno" },
      { name: "IČO: 025 06 599" },
      { name: "DIČ: CZ02506599" },
    ],
  },
];

const FooterArea = () => {
  const year = new Date().getFullYear().toString();
  console.log(year);
  return (
    <footer className="footerArea">
      <div className="footerTopArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footerLogo">
                <img src={logo} alt="" />
              </div>
            </div>
            {footerLinks.map((menu, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                <div className="footerWrap">
                  <h3>{menu.title}</h3>
                  <ul>
                    {menu.menus.map((item, i) => (
                      <li key={i}>{item.route ? <a href={`/${item.route}`}>{item.name}</a> : `${item.name}`}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footerBottomArea">
        <div className="container">
          <div className="footerBottomContent">
            <div className="row">
              <div className="col-md-8 col-sm-10 col-12">
                <span>Copyright © {year} AK Prudil a spol., s.r.o. Všechna práva vyhrazena.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterArea;
