import Hero from "./Hero";
import Quote from "./Quote";
import Cards from "./Cards"

const Main = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Quote />
      <Cards />
    </div>
  );
};

export default Main;
