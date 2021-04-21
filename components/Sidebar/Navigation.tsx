import { useState } from "react";

const Navigation = (props: {
  links: {
    logo: string;
    home: string;
    lehenga: string;
    sari: string;
    oil: string;
    juice: string;
    spices: string;
    contactUs: string;
  };
}): JSX.Element => {
  const [apparelsState, setApparelsState] = useState(false);
  const [organicState, setOrganicState] = useState(false);
  const { contactUs, home, juice, lehenga, oil, sari, spices } = props.links;
  return (
    <nav className="flex-1 flex flex-col justify-center text-blue-900  font-semibold text-2xl z-50">
      <ul className="flex-1 flex flex-col justify-center items-center space-y-5">
        <li className="transition px-8 w-nav cursor-pointer  hover:opacity-85 ">
          <a href={home} className="text-gray-600 hover:text-gray-500">
            Home
          </a>
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
            <li className="py-2">
              <a href={lehenga}>Lehenga</a>
            </li>
            <li className="py-2">
              <a href={sari}>Sari</a>
            </li>
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
            <li className="py-2">
              <a href={oil}>Oil</a>
            </li>
            <li className="py-2">
              <a href={juice}>Juice</a>
            </li>
          </ul>
        </li>
        <li className="transition px-8 w-nav cursor-pointer  hover:opacity-85 ">
          <a href={spices} className="text-blue-900 hover:text-blue-800">
            Spices
          </a>
        </li>
        <li className="transition px-8 w-nav cursor-pointer  hover:opacity-85 ">
          <a href={contactUs} className="text-blue-900 hover:text-blue-800">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
