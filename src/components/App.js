import MainPage from "./main/MainPage";
import Ads from "./Ads/Ads";
import Experince from "./experince/Experince";
import FAQ from "./FAQ/FAQ";
import Footer from "./footer/Footer";
import FUT from "./FUT/FUT";
import Hiring from "./Hiring/Hiring";
import Partners from "./partners/Partners";
import OurServices from "./services/OurServices";
import Steps from "./steps/Steps";
import Why from "./Why/Why";
import AOS from "aos";

function App () {
  AOS.init();
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  return (
    <>
      <MainPage />
      <OurServices />
      {/* <Ads />
      <Steps />
      <Why />
      <FAQ />
      <Hiring />
      <FUT />
      <Experince />
      <Partners />
      <Footer /> */}
    </>
  );
}

export default App;
