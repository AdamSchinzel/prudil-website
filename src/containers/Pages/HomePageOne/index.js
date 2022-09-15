import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import HeroSlider from "../../../components/HeroSlider";
import Service from "../../../components/Service";
import About from "../../../components/About";
import ServiceArea from "../../../components/ServiceArea";
import Portfolio from "../../../components/Portfolio";
import Testmonial from "../../../components/Testmonial";
import ContactArea from "../../../components/ContactArea";
import TeamMember from "../../../components/TeamMember";
import CounterArea from "../../../components/CounterArea";
import BlogArea from "../../../components/BlogArea";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
// images
import about from "../../../images/about/2.jpg";
import signature from "../../../images/about/1.png";

// images
import portfolio1 from "../../../images/studies/1.jpg";
import portfolio2 from "../../../images/studies/2.jpg";
import portfolio3 from "../../../images/studies/3.jpg";
import portfolio4 from "../../../images/studies/4.jpg";
import portfolio5 from "../../../images/studies/5.jpg";

const aboutText = [
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,",
  },
  {
    text: 'and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum',
  },
];

const heroSliders = [
  {
    images: "slideWrapperOne",
    title: "We Fight For Your Justice",
    subTitle: "As Like A Friend.",
    text: "The Most Talented Law Frim",
    button: "Contact us now",
  },
  {
    images: "slideWrapperTwo",
    title: "We Fight For Your Justice",
    subTitle: "As Like A Friend.",
    text: "The Most Talented Law Frim",
    button: "Contact us now",
  },
];

const services = [
  {
    icon: "flaticon-parents",
    title: "Family Law",
    content: "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-wounded",
    title: "Personal Injury",
    content: "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-employee",
    title: "Business Law",
    content: "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-thief",
    title: "Criminal Law",
    content: "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-university-graduate-hat",
    title: "Education Law",
    content: "It is a long established fact that a reader will be distracted by the readable content of ",
  },
  {
    icon: "flaticon-house",
    title: "Real Estate Law",
    content: "It is a long established fact that a reader will be distracted by the readable content of ",
  },
];

const portfolioItem = [
  { images: portfolio1, title: "Auto pokorný Brno", subtitle: "Corporate" },
  { images: portfolio2, title: "Auto pokorný Motors", subtitle: "General" },
  { images: portfolio3, title: "IVF Zlín", subtitle: "Business" },
  { images: portfolio4, title: "Decentree", subtitle: "Criminal" },
  { images: portfolio5, title: "Luftio", subtitle: "Family Issue" },
];

const HomePageOne = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea" />
      </header>
      <HeroSlider sliders={heroSliders} className="heroSliderArea" />
      <ServiceArea className="ourServiceArea" title="Zaměření" subTitle="Na co se specializujeme" services={services} />
      <ServiceArea
        className="ourServiceArea ourServiceAreaStyleThree"
        title="Odměna"
        subTitle="Jaký je náš honorář"
        services={services}
      />
      <TeamMember title="Kolektiv" subTitle="Kdo u nás pracuje" className="teamArea" slider={true} />
      <Testmonial className="testmonialArea" />
      <Portfolio
        className="portfolioArea"
        title="Naši Partněri"
        subTitle="S kým spolupracujeme"
        portfolioItem={portfolioItem}
      />
      <FooterArea />
    </Fragment>
  );
};
export default HomePageOne;
