const Main = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-96 hero flex w-full items-center justify-center">
        <div className="flex flex-col space-y-4">
          <h1 className="hero-text uppercase text-gray-50 text-6xl shadow-lg font-semibold rounded-xl p-5">
            This is a test
          </h1>
          <div className="flex justify-center space-x-3">
            <button className="text-black text-xl font-semibold shadow-lg bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-md">
              Click Me
            </button>
            <button className="text-gray-50 text-xl font-semibold shadow-lg bg-blue-900 hover:bg-blue-700 px-4 py-2 rounded-md">
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
