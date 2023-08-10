import ContentSec from "../../Component/ContentSec/ContentSec";
import CostomSec from "../../Component/CostomSec/CostomSec";
import DarkSec from "../../Component/DarkSec/DarkSec";
import DeatailSec from "../../Component/Detail/DeatailSec";
import Wrapper from "../../Component/FirstPortion/Wrapper";
import Footer from "../../Component/Footer/Footer";
import ForthSec from "../../Component/ForthSec/ForthSec";
import LastSec from "../../Component/LastSec/LastSec";
import NavBar from "../../Component/NavBar/NavBar";
import Pages from "../../Component/Pages/Pages";
import Responsive from "../../Component/Responsive/Responsive";
import SecThird from "../../Component/SecThird/SecThird";
import SectionULove from "../../Component/SecULove/SectionULove";
import SliderSec from "../../Component/SliderSec/SliderCard";

const Home = () => {
  return (
    <>
      <NavBar />
      <Wrapper />
      <DarkSec />
      <SecThird />
      <ForthSec />
      <ContentSec />
      <SectionULove />
      <Pages />
      <CostomSec />
      <Responsive />
      <DeatailSec />
      <SliderSec />
      <LastSec />
      <Footer />
    </>
  );
};

export default Home;
