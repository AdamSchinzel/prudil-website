import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

// images
import article1 from "../../images/articles/1.png";

const sliders = [
  {
    text: "Náhradní mateřství: stav v České republice a odpovědnost praktického lékaře",
    title: "2018",
    url: "https://www.muni.cz/en/research/publications/1498582",
  },
  {
    text: "Právo pro zdravotnické pracovníky",
    title: "2017",
    url: "https://www.muni.cz/en/research/publications/1378672",
  },
  {
    text: "V jedné ruce občanský zákoník, v druhé zákon o zdravotní péči, a už se nechytáte",
    title: "2014",
    url: "https://www.muni.cz/en/research/publications/1211803",
  },
  {
    text: "Máme ústavní oporu pro provádění eutanazie?",
    title: "2012",
    url: "https://www.muni.cz/en/research/publications/1075257",
  },
  {
    text: "Poskytování informací pacientovi a dalším osobám",
    title: "2012",
    url: "https://www.muni.cz/en/research/publications/1546272",
  },
];
const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Articles = ({ className }) => {
  return (
    <div className={className} id="clanky">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="testimonialImages">
              <img src={article1} alt="Noviny" />
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 col-md-6">
            <div className="testimonialContent">
              <span>Naše publikace</span>
              <h2>Články</h2>
              <Slider className="testmonialSlider" {...settings}>
                {sliders.map((slider, i) => (
                  <a href={slider.url} target="_blank" rel="noopener noreferrer">
                    <div key={i} className="slideItem">
                      <p>{slider.text}</p>
                      <div className="thumbWrap">
                        <div className="imgContent">
                          <h4>{slider.title}</h4>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
