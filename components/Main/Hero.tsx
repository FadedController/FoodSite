const Hero = (): JSX.Element => {
  return (
    <div className="h-96 hero flex w-full items-center justify-center shadow-inner">
      <div className="fade-in flex flex-col space-y-12">
        <h1 className="hero-text uppercase flex items-center justify-center text-gray-50 text-6xl shadow-lg font-semibold rounded-xl p-5 mx-4">
          Lorem Ipsum
        </h1>
        <div className="flex justify-center space-x-8 opacity-90">
          <a
            href="#cards"
            className="text-black text-xl font-semibold shadow-lg bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="text-gray-50 text-xl font-semibold shadow-lg bg-blue-900 hover:bg-blue-800 px-4 py-2 rounded-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
