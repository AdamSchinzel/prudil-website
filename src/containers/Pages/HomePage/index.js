import React from "react";
import {
  BiPieChartAlt,
  BiTime,
  BiDetail,
  BiCommentCheck,
  BiPulse,
  BiMoney,
  BiBriefcaseAlt,
  BiRun,
  BiBody,
  BiBadgeCheck,
} from "react-icons/bi";

import HeaderBottom from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import HeroSlider from "../../../components/HeroSlider";
import ServiceArea from "../../../components/ServiceArea";
import Partners from "../../../components/Partners";
import Articles from "../../../components/Articles";
import TeamMember from "../../../components/TeamMember";
import Footer from "../../../components/Footer";
import Where from "../../../components/Where";

// images
import partner1 from "../../../images/partners/1.png";
import partner2 from "../../../images/partners/2.png";
import partner3 from "../../../images/partners/3.png";
import partner4 from "../../../images/partners/4.png";
import partner5 from "../../../images/partners/5.png";

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
    icon: <BiPulse color="#c0b596" size="40px" />,
    title: "Medicínské právo",
    content: (
      <ul>
        <li>- Odpovědnost za škodu způsobenou při výkonu léčebné péče</li>
        <li>- Trestné činy v souvislosti s výkonem zdravotnického povolání</li>
        <li>- Náhrada škody</li>
        <li>- Ochrana přirozených práv člověka</li>
        <li>
          - Veškeré právní služby pro poskytovatele zdravotních služeb (tvorba vnitřních předpisů, pracovní smlouvy,
          smlouvy s dodavateli, smlouvy s pojišťovnami, změna právní formy poskytovatele zdravotních služeb, řízení pro
          získávání oprávnění poskytovatele zdravotních služeb)
        </li>
      </ul>
    ),
  },
  {
    icon: <BiRun color="#c0b596" size="40px" />,
    title: "Trestní právo",
    content: (
      <ul>
        <li>- Obhajoby ve všech trestních věcech a stádiích trestního řízení</li>
        <li>- Řádné i mimořádné opravné prostředky</li>
        <li>- Mladiství</li>
        <li>- Vazby</li>
        <li>- Zastupování proti státu s nároky na náhradu škody</li>
        <li>
          - Uplatňování a vymáhání nároků poškozených a zúčastněných osob (včetně uplatnění náhrady nemajetkové újmy v
          penězích)
        </li>
        <li>- Ex offo</li>
      </ul>
    ),
  },
  {
    icon: <BiBody color="#c0b596" size="40px" />,
    title: "Rodinné právo",
    content: (
      <ul>
        <li>
          - Vztahy mezi rodiči a dětmi (svěření do péče, úprava vztahů, vyživovací povinnost, alimenty) Vztahy mezi
          rodiči a dětmi (svěření do péče, úprava vztahů, vyživovací povinnost, alimenty)
        </li>
        <li>- Řízení o osvojení dítěte</li>
        <li>- Právní aspekty náhradního mateřství</li>
        <li>- Nezletilí, výživné</li>
        <li>- Majetková práva manželů</li>
        <li>- Rozvody manželství</li>
        <li>- Vypořádání majetku po skončení manželství</li>
      </ul>
    ),
  },
  {
    icon: <BiBriefcaseAlt color="#c0b596" size="40px" />,
    title: "Pracovní právo",
    content: (
      <ul>
        <li>- Vztahy z pracovního poměru a nároky z jeho neplatného skončení</li>
        <li>
          - Pracovní smlouvy, ukončení pracovního poměru (výpověď, okamžité skončení pracovního poměru, skončení
          pracovního poměru ve zkušební době)
        </li>
        <li>
          - Odpovědnost za škodu v pracovněprávních vztazích a nároky z ní plynoucí (náhrada za ztrátu na výdělku,
          bolestné, ztížení společenského uplatnění)
        </li>
      </ul>
    ),
  },
  {
    icon: <BiBadgeCheck color="#c0b596" size="40px" />,
    title: "Správní právo",
    content: (
      <ul>
        <li>- Katastr nemovitostí - veškerá agenda</li>
        <li>- Stavební právo včetně zastupování před stavebním úřadem</li>
        <li>- Přestupky - veškerá agenda včetně zastupování v přestupkovém řízení</li>
        <li>- Azylové právo</li>
        <li>- Právo sociálního zabezpečení (starobní důchod, invalidní důchod)</li>
        <li>- Správní právo pro subjekty ze zdravotnictví</li>
      </ul>
    ),
  },
  {
    icon: <BiMoney color="#c0b596" size="40px" />,
    title: "Směnečné a šekové právo",
    content: (
      <ul>
        <li>- Příprava smluv zajištěných směnkami</li>
        <li>- Indosamenty směnek a biancosměnek</li>
        <li>- Zastupování v soudních řízeních týkajících se vymáhání směnečných pohledávek</li>
        <li>- Zastupování v soudních řízeních při obraně dlužníků proti uplatnění směnečných pohledávek</li>
        <li>- Zastupování při jednáních s obchodními partnery klienta</li>
      </ul>
    ),
  },
];

const awards = [
  {
    icon: <BiTime color="#c0b596" size="40px" />,
    title: "Smluvní odměna časová",
    content:
      "Smluvní odměna časová je odměnou, kdy klient platí advokátovi sjednanou odměnu podle počtu hodin právní služby. Při časově nenáročných poradách lze sazbu hodinové odměny poměrně snížit. Při řešení odborně náročné problematiky lze naopak odměnu poměrně zvýšit, stejně tak při řešení problematiky s cizím jazykovým prvkem. Tento druh odměny je často sjednáván v rodinněprávních věcech, jako je rozvod manželství, a při obhajobě obviněných v trestních věcech.",
  },
  {
    icon: <BiCommentCheck color="#c0b596" size="40px" />,
    title: "Smluvní odměna úkonová",
    content:
      "Smluvní odměna úkonová je odměna stanovená podle počtu úkonů právní služby, které budou v konkrétní věci učiněny. Co se považuje za úkon právní služby stanoví advokátní tarif. Jedná se např. o převzetí a přípravu právního zastoupení nebo obhajoby, sepis smlouvy, sepis žaloby, sepis odvolání, účast na jednání u soudu apod. Případně lze dohodou stanovit jako úkon právní služby i úkony nad rámec advokátního tarifu, tedy úkon, který není v advokátním tarifu zmíněn.",
  },
  {
    icon: <BiDetail color="#c0b596" size="40px" />,
    title: "Smluvní odměna paušální",
    content:
      "Smluvní odměna paušální je vhodná pro klienty, kteří mají pravidelnou potřebu právních služeb v určitém stabilním rozsahu, je nabízena možnost hradit právní služby paušální odměnou, tedy dohodnutou pevnou částkou placenou pravidelně (např. měsíčně). Za paušální odměnu jsou klientovi poskytovány právní služby bez ohledu na jejich rozsah v daném období. Paušální odměna přináší klientovi výhodu předvídatelnosti a stabilní výše výdajů na právní služby i v situacích, ve kterých by byl jinak klient vzhledem k vyšší potřebě právních služeb v daném období vystaven nutnosti nést nárazově podstatně vyšší náklady na právní služby.",
  },
  {
    icon: <BiPieChartAlt color="#c0b596" size="40px" />,
    title: "Smluvní odměna podílová",
    content:
      "Smluvní odměna podílová je odměna, která je dohodou stran stanovena jako podíl podle výsledku věci (tj. procentem z nároku ve věci přiznaného). Výše procentní sazby, resp. podílu z výsledku sporu, je sjednávána v závislosti na hodnotě sporu, náročnosti případu a riziku neúspěchu. Tato odměna bývá uplatňována v případech, kdy není jistý výsledek sporu a klient není ochoten nést riziko případného neúspěchu. Riziko tak na základě dohody nese advokát, tj. pokud dojde k úspěchu ve věci je odměna vyšší než u časové nebo úkonové odměny, avšak v případě neúspěchu je odměna minimální nebo žádná.",
  },
];

const portfolioItem = [
  {
    images: partner1,
    title: "Auto pokorný Brno",
    url: "http://www.autopokorny.cz/",
    links: [{ text: "autopokorny.cz" }],
  },
  {
    images: partner2,
    title: "Auto pokorný Motors",
    url: "https://autopokorny.hyundai.cz/",
    links: [{ text: "hyundaivbrne.cz" }],
  },
  {
    images: partner3,
    title: "IVF Zlín",
    url: "https://www.ivf-zlin.cz/",
    links: [{ text: "ivf-zlin.com" }],
  },
  {
    images: partner4,
    title: "Decentree",
    url: "https://decentree.com/",
    links: [{ text: "decentree.com" }],
  },
  {
    images: partner5,
    title: "Schuberth Motors",
    url: "https://www.dualtronkolobezky.cz/",
    links: [{ text: "dualtronkolobezky.cz" }],
  },
];

const HomePage = () => {
  return (
    <>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBottom className="headerBottomArea" />
      </header>
      <HeroSlider slider sliders={heroSliders} className="heroSliderArea" />
      <ServiceArea
        className="ourServiceArea"
        title="Zaměření"
        subTitle="Na co se specializujeme"
        services={services}
        isMore
      />
      <ServiceArea
        className="ourServiceArea ourServiceAreaStyleThree"
        title="Odměna"
        subTitle="Jaký je náš honorář"
        services={awards}
      />
      <TeamMember title="Kolektiv" subTitle="Kdo u nás pracuje" className="teamArea" slider={true} />
      <Articles className="testmonialArea" />
      <Partners
        className="portfolioArea"
        title="Naši Partněri"
        subTitle="S kým spolupracujeme"
        portfolioItem={portfolioItem}
      />
      <Where title="Kde nás najdete" subTitle="Naše sídlo" />
      <Footer />
    </>
  );
};

export default HomePage;
