import { useState } from "react";

const Navigation = (): JSX.Element => {
  const [apparelsState, setApparelsState] = useState(false);
  const [organicState, setOrganicState] = useState(false);
  return (
    <nav className="flex-1 flex flex-col justify-center text-blue-900  font-semibold text-2xl z-50">
      <ul className="flex-1 flex flex-col justify-center items-center space-y-5">
        <li className="transition px-8 w-nav cursor-pointer  hover:opacity-85 ">
          <p className="text-gray-600 hover:text-gray-500">Home</p>
        </li>
        <li
          onMouseEnter={() => setApparelsState(true)}
          onMouseLeave={() => setApparelsState(false)}
          className="relative w-nav cursor-pointer flex items-center hover:opacity-95"
        >
          <p className="transition hover:text-blue-800 mx-8 flex-1">Apparels</p>
          <div className="w-12 ">
            <span
              className={`transition mt-1 ${
                apparelsState ? "transform rotate-90" : ""
              } material-icons text-base`}
            >
              arrow_forward_ios
            </span>
          </div>
          <ul
            className={` ${
              apparelsState ? "visible opacity-100" : "invisible opacity-0"
            } absolute transition -right min-w-menu bg-gray-100 font-normal text-lg divide-y divide-gray-500 py-2 px-5 rounded-sm shadow-md`}
          >
            <li className="py-2">Lehenga</li>
            <li className="py-2">Sari</li>
          </ul>
        </li>
        <li
          onMouseEnter={() => setOrganicState(true)}
          onMouseLeave={() => setOrganicState(false)}
          className="relative w-nav cursor-pointer flex items-center hover:opacity-95"
        >
          <p className="transition hover:text-blue-800 mx-8 flex-1">
            Organic Food
          </p>
          <div className="w-12 ">
            <span
              className={`transition mt-1 ${
                organicState ? "transform rotate-90" : ""
              } material-icons text-base`}
            >
              arrow_forward_ios
            </span>
          </div>
          <ul
            className={`${
              organicState ? "visible opacity-100" : "invisible opacity-0"
            } absolute transition -right min-w-menu bg-gray-100 font-normal text-lg divide-y divide-gray-500 py-2 px-5 rounded-sm shadow-md`}
          >
            <li className="py-2">Oil</li>
            <li className="py-2">Juice</li>
          </ul>
        </li>
        <li className="transition px-8 w-nav cursor-pointer  hover:opacity-85 ">
          <p className="text-blue-900 hover:text-blue-800">Spices</p>
        </li>
        <li className="transition px-8 w-nav cursor-pointer  hover:opacity-85 ">
          <a href="#contact" className="text-blue-900 hover:text-blue-800">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
