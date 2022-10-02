import React from "react";
import {
  BiPulse,
  BiBookBookmark,
  BiMoney,
  BiBookOpen,
  BiBriefcaseAlt,
  BiRun,
  BiBody,
  BiBadgeCheck,
  BiStreetView,
} from "react-icons/bi";
import HeaderBottom from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import ServiceArea from "../../../components/ServiceArea";
import Footer from "../../../components/Footer";

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
  {
    icon: <BiBookBookmark color="#c0b596" size="40px" />,
    title: "Občanské právo",
    content: (
      <ul>
        <li>- Nemovitosti (pozemky, domy, bytové jednotky, nebytové prostory, spoluvlastnictví, vlastnictví)</li>
        <li>- Byty (družstevní byty, byty v osobním vlastnictví, převod členství v bytovém družstvu)</li>
        <li>
          - Nájmy (nájem a podnájem bytu, nájem a podnájem nebytových prostor, zrušení společného nájmu bytu, výpověď z
          nájmu, skončení nájmu)
        </li>
        <li>
          - Věcná břemena, zástavy, zajištění závazků (právo doživotního užívání, právo průchodu, právo přístupu,
          zástava, ručení, svěřenská úschova)
        </li>
        <li>- Smlouvy pojmenované i nepojmenované (smlouvy kupní, darovací, vypořádací, o ubytování, o pronájmu)</li>
        <li>- Ochrana přirozených práv člověka (včetně uplatnění náhrady nemajetkové újmy v penězích)</li>
        <li>- Právo duševního vlastnictví (autorské právo, ochranné známky, patenty, licence)</li>
        <li>- Dědictví</li>
        <li>- Zakládání právnických osob (s.r.o., spolků apod.)</li>{" "}
        <li>- Civilní žaloby a zastupování při všech civilních věcech a ve všech stádiích civilního řízení</li>
        <li>- Stížnosti k Evropskému soudu pro lidská práva do Štrasburku</li>
      </ul>
    ),
  },
  {
    icon: <BiStreetView color="#c0b596" size="40px" />,
    title: "Mezinárodní právo soukromé",
    content: (
      <ul>
        <li>- Vymezení vztahů s mezinárodním prvkem</li>
        <li>- Vymezení druhů norem mezinárodního práva soukromého a vztahů mezi nimi</li>
      </ul>
    ),
  },
  {
    icon: <BiBookOpen color="#c0b596" size="40px" />,
    title: "Ústavní právo",
    content: (
      <ul>
        <li>- Sepisování ústavních stížností v civilních i trestních věcech</li>
        <li>- Zastupování před Ústavním soudem</li>
      </ul>
    ),
  },
];

const ServicesPage = () => {
  return (
    <>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBottom className="headerBottomArea" />
      </header>
      <ServiceArea className="ourServiceArea" title="Zaměření" subTitle="Na co se specializujeme" services={services} />
      <Footer />
    </>
  );
};
export default ServicesPage;
