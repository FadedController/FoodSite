import Hero from "./Hero";
import About from "./About";
import Cards from "./Cards";
import WhyUs from "./WhyUs";
import ContactForm from "../Contact/Contact";

const Main = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <Cards />
      <WhyUs />
      <ContactForm />
    </div>
  );
};

export default Main;
