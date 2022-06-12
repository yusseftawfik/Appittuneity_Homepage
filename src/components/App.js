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

function App () {
  return (
    <>
      <MainPage />
      <OurServices />
      <Ads />
      <Steps />
      <Why />
      <FAQ />
      <Hiring />
      <FUT />
      <Experince />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
