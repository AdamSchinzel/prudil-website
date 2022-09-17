import React from "react";
import SectionTitle from "../Title";
import "./style.scss";

const Portfolio = ({ title, subTitle, className, fullWidth, portfolioItem }) => {
  return (
    <div className={className} id="partneri">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title={title} subTitle={subTitle} />
          </div>
        </div>
      </div>

      {!fullWidth ? (
        <div className="portfolioWrapper">
          {portfolioItem.map((portfolio, i) => (
            <div key={i} className="portfolioItem">
              <a href={portfolio.url} target="_blank">
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
      ) : (
        <div className="container gridPortfolio">
          <div className="row">
            {portfolioItem.map((portfolio, i) => (
              <div key={i} className="col-lg-4 col-sm-6 col-12">
                <div key={i} className="portfolioItem">
                  <div className="portfolioContent">
                    {portfolio.links.map((link, i) => (
                      <a key={i} href={link.url} targer="_blank">
                        <p>{link.text}</p>
                      </a>
                    ))}
                    <h3>{portfolio.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Portfolio;
