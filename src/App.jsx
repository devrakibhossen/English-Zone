import CallToAction from "./components/CallToAction";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import WhyEnglishZone from "./components/WhyEnglishZone";

const App = () => {
  return (
    <div>
      <Hero></Hero>
      <WhyEnglishZone />
      <CallToAction />
      <Faqs />
    </div>
  );
};

export default App;
