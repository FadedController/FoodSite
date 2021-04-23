const Cards = (): JSX.Element => {
  return (
    <div
      className="cards-bg pt-20 md:pt-24 flex flex-col w-full items-center justify-center shadow-inner"
      id="cards"
    >
      <div className="max-w-4xl bg-gray-50 md:px-16 md:py-10 md:mx-12 px-3 py-8 md:rounded-md shadow-inner items-center space-y-8">
        <h1 className="mx-2 flex font-semibold text-blue-900 text-4xl">
          Lorem Ipsum, Dolor Sit
        </h1>
        <p className="mx-2 font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          consequuntur, aspernatur voluptas quasi error nulla ad ex dolorem
          earum dicta vel provident illo odio quam, obcaecati doloribus odit!
          Qui, quasi.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:space-x-4 mb-10 w-full">
        <div className=" mt-8 lg:flex-1 flex lg:justify-end justify-center">
          <div className="flex flex-col max-w-md rounded-lg space-y-4 bg-gray-50 shadow-lg m-6">
            <img
              className="rounded-t-lg h-80"
              src="https://images.unsplash.com/photo-1612039294290-d237af6812c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80"
            />
            <h3 className="font-semibold text-2xl px-6">Lorem Ipsum</h3>
            <p className="px-6 pb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              minima reiciendis sint et nesciunt, rerum aliquam ipsam doloremque
              ea expedita vel velit dolor quod provident maiores illo odio minus
              architecto!
            </p>
            <div className="flex justify-center pb-6">
              <button className="text-black z-0 text-xl font-semibold shadow-lg bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md opacity-90">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-8 lg:flex-1 flex lg:justify-start justify-center">
          <div className="flex flex-col max-w-md rounded-lg space-y-4 bg-gray-50 shadow-lg m-6">
            <img
              className="rounded-t-lg h-80"
              src="https://images.unsplash.com/photo-1567181567863-dbec7cad7e6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            <h3 className="font-semibold text-2xl px-6">Lorem Ipsum</h3>
            <p className="px-6 pb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              minima reiciendis sint et nesciunt, rerum aliquam ipsam doloremque
              ea expedita vel velit dolor quod provident maiores illo odio minus
              architecto!
            </p>
            <div className="flex justify-center pb-6">
              <button className="text-black text-xl font-semibold shadow-lg bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md opacity-90">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
