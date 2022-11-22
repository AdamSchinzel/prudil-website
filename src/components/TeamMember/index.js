import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../SectionTitle";
import "./style.scss";

// images
import teamMember1 from "../../images/team/1.png";
import teamMember2 from "../../images/team/2.png";
import teamMember3 from "../../images/team/3.png";
import teamMember4 from "../../images/team/4.png";
import teamMember5 from "../../images/team/5.png";

// docs
import cv1 from "../../images/team/lukas-prudil-cv.doc";
import cv2 from "../../images/team/leona-prudilova-cv.pdf";
import cv3 from "../../images/team/vendula-kalova-cv.docx";
import cv4 from "../../images/team/martina-karaskova-cv.pdf";
import cv5 from "../../images/team/ondrej-pechl-cv.pdf";

const teams = [
  {
    name: "JUDr. Ing. Lukáš Prudil, Ph.D.",
    level: "Advokát",
    image: teamMember1,
    socialMedia: [],
    path: cv1,
  },
  {
    name: "Mgr. Leona Prudilová",
    level: "Advokátka",
    image: teamMember2,
    socialMedia: [],
    path: cv2,
  },
  {
    name: "Mgr. Vendulka Kalová",
    level: "Spolupracující advokátka",
    image: teamMember3,
    socialMedia: [],
    path: cv3,
  },
  {
    name: "Bc. Martina Karásková, DiS.",
    level: "Vedoucí kanceláře",
    image: teamMember4,
    socialMedia: [],
    path: cv4,
  },
  {
    name: "Mgr. Ondřeje Pejchl",
    level: "Advokátní koncipient",
    image: teamMember5,
    socialMedia: [],
    path: cv5,
  },
];

const settings = {
  dots: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const TeamMember = ({ className, title, subTitle, slider, noGutters }) => {
  return (
    <div className={className} id="kolektiv">
      <div className="container">
        <div className={!noGutters ? "row" : "row no-gutters"}>
          <div className="col-12">
            <SectionTitle title={title} subTitle={subTitle} />
          </div>
          {slider ? (
            <div className="col-12">
              <Slider className="teamSlideArea" {...settings}>
                {teams.map((team, i) => (
                  <div key={i} className="teamWrapper">
                    <div className="teamImage">
                      <img src={team.image} alt={team.name} />
                    </div>
                    <div className="teamContent">
                      <h3>{team.name}</h3>
                      <span>{team.level}</span>
                      <ul>
                        <li>
                          <a href={team.path} download>
                            CV
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <>
              {teams.map((team, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-12">
                  <div className="teamWrapper">
                    <div className="teamImage">
                      <img src={team.image} alt="" />
                    </div>
                    <div className="teamContent">
                      <h3>{team.name}</h3>
                      <span>{team.level}</span>
                      <ul>
                        {team.socialMedia.map((social) => (
                          <li key={social}>
                            <a href="#">
                              <i className={`fa fa-${social}`} aria-hidden="true"></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
