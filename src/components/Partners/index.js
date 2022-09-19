import React from "react";
import SectionTitle from "../SectionTitle";
import "./style.scss";

const Partners = ({ title, subTitle, className, portfolioItem }) => {
  return (
    <div className={className} id="partneri" style={{ marginTop: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title={title} subTitle={subTitle} />
          </div>
        </div>
      </div>
      <div className="portfolioWrapper">
        {portfolioItem.map((portfolio, i) => (
          <div key={i} className="portfolioItem">
            <a href={portfolio.url} target="_blank" rel="noopener noreferrer">
              <img src={portfolio.images} alt={"Logo " + portfolio.title} />
              <div className="portfolioContent">
                {portfolio.links.map((link, i) => (
                  <p key={i}>{link.text}</p>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
