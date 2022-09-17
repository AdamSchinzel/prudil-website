import React, { Fragment } from "react";
import HeaderBottom from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import HeroSlider from "../../../components/HeroSlider";
import ServiceArea from "../../../components/ServiceArea";
import Portfolio from "../../../components/Portfolio";
import Testmonial from "../../../components/Testmonial";
import TeamMember from "../../../components/TeamMember";
import FooterArea from "../../../components/FooterArea";
import Where from "../../../components/Where";

// images
import portfolio1 from "../../../images/studies/1.png";
import portfolio2 from "../../../images/studies/2.png";
import portfolio3 from "../../../images/studies/3.png";
import portfolio4 from "../../../images/studies/4.png";
import portfolio5 from "../../../images/studies/5.png";

const heroSliders = [
  {
    images: "slideWrapperTwo",
    title: "Komplexní právní služby",
    subTitle: "na jednom místě.",
    text: "Advokátní kancelář",
    button: "Napiště nám",
  },
];

const services = [
  {
    icon: "flaticon-parents",
    title: "Smluvní odměna časová",
    content:
      "Smluvní odměna časová je odměnou, kdy klient platí advokátovi sjednanou odměnu podle počtu hodin právní služby. Při časově nenáročných poradách lze sazbu hodinové odměny poměrně snížit. Při řešení odborně náročné problematiky lze naopak odměnu poměrně zvýšit, stejně tak při řešení problematiky s cizím jazykovým prvkem.",
  },
  {
    icon: "flaticon-wounded",
    title: "Smluvní odměna úkonová",
    content:
      "Smluvní odměna úkonová je odměna stanovená podle počtu úkonů právní služby, které budou v konkrétní věci učiněny. Co se považuje za úkon právní služby stanoví advokátní tarif. Jedná se např. o převzetí a přípravu právního zastoupení nebo obhajoby, sepis smlouvy, sepis žaloby, sepis odvolání, účast na jednání u soudu apod. Případně lze dohodou stanovit jako úkon právní služby i úkony nad rámec advokátního tarifu, tedy úkon, který není v advokátním tarifu zmíněn.",
  },
  {
    icon: "flaticon-employee",
    title: "Smluvní odměna paušální",
    content:
      "Smluvní odměna paušální je vhodná pro klienty, kteří mají pravidelnou potřebu právních služeb v určitém stabilním rozsahu, je nabízena možnost hradit právní služby paušální odměnou, tedy dohodnutou pevnou částkou placenou pravidelně (např. měsíčně). Za paušální odměnu jsou klientovi poskytovány právní služby bez ohledu na jejich rozsah v daném období. Paušální odměna přináší klientovi výhodu předvídatelnosti a stabilní výše výdajů na právní služby i v situacích, ve kterých by byl jinak klient vzhledem k vyšší potřebě právních služeb v daném období vystaven nutnosti nést nárazově podstatně vyšší náklady na právní služby.",
  },
  {
    icon: "flaticon-thief",
    title: "Smluvní odměna podílová",
    content:
      "Smluvní odměna podílová je odměna, která je dohodou stran stanovena jako podíl podle výsledku věci (tj. procentem z nároku ve věci přiznaného).",
  },
];

const portfolioItem = [
  {
    images: portfolio1,
    title: "Auto pokorný Brno",
    url: "http://www.autopokorny.cz/",
    links: [{ text: "autopokorny.cz" }, { text: "renaultbrno.cz" }, { text: "daciabrno.cz" }],
  },
  {
    images: portfolio2,
    title: "Auto pokorný Motors",
    url: "https://autopokorny.hyundai.cz/",
    links: [{ text: "hyundaivbrne.cz" }],
  },
  {
    images: portfolio3,
    title: "IVF Zlín",
    url: "https://www.ivf-zlin.cz/",
    links: [{ text: "ivf-zlin.com" }],
  },
  {
    images: portfolio4,
    title: "Decentree",
    url: "https://decentree.com/",
    links: [{ text: "decentree.com" }],
  },
  {
    images: portfolio5,
    title: "Schuberth Motors",
    url: "https://www.dualtronkolobezky.cz/",
    links: [{ text: "dualtronkolobezky.cz" }],
  },
];

const HomePageOne = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBottom className="headerBottomArea" />
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
      <Where title="Kde nás najdete" subTitle="Naše sídlo" />
      <FooterArea />
    </Fragment>
  );
};
export default HomePageOne;
