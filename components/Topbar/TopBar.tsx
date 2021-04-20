import { useState } from "react";

const TopBar = (): JSX.Element => {
  const [state, setState] = useState(false);
  const [organicState, setOrganicState] = useState(false);
  const [apparelsState, setApparelsState] = useState(false);

  return (
    <>
      <div className="md:hidden flex flex-col shadow-xl bg-gray-50 sticky top-0 z-10">
        <div className="flex items-center">
          <div className="flex-1 flex flex-col font-bold text-3xl p-4">
            <h1 className="text-yellow-500">Your</h1>
            <h1 className="text-blue-900">Brand</h1>
          </div>
          <div
            className={`transition mr-2 ${
              state ? "opacity-100 cursor-pointer" : "opacity-0 cursor-default"
            }`}
            onClick={() => setState(false)}
          >
            <span className="material-icons text-4xl">close</span>
          </div>
          <div className="mr-6 cursor-pointer" onClick={() => setState(!state)}>
            <span className="material-icons text-4xl">menu</span>
          </div>
        </div>
        <nav
          className={`topbar ${
            state ? "topbar-open" : ""
          } font-semibold text-2xl text-blue-900`}
        >
          <ul className="flex flex-col space-y-3 mt-2 mb-6 ">
            <li className="px-5 flex cursor-pointer">
              <p className="text-gray-600">Home</p>
            </li>
            <li
              className="flex flex-col px-5 cursor-pointer"
              onClick={() => setApparelsState(!apparelsState)}
            >
              <div className="flex">
                <p>Apparels</p>
                <div>
                  <span
                    className={`${
                      apparelsState ? "transform rotate-90" : ""
                    } material-icons mx-4 mt-1 text-xl`}
                  >
                    arrow_forward_ios
                  </span>
                </div>
              </div>
              <ul
                className={`transition topbar ${
                  apparelsState ? "topbar-open text-2xl" : ""
                }`}
              >
                <li
                  onClick={() => console.log("lehenga")}
                  className="px-5 py-1 font-normal"
                >
                  Legenga
                </li>
                <li
                  onClick={() => console.log("sari")}
                  className="px-5 py-1 font-normal"
                >
                  Sari
                </li>
              </ul>
            </li>
            <li
              className="flex flex-col px-5 cursor-pointer"
              onClick={() => setOrganicState(!organicState)}
            >
              <div className="flex">
                <p>Organic Food</p>
                <div>
                  <span
                    className={`${
                      organicState ? "transform rotate-90" : ""
                    } material-icons mx-4 mt-1 text-xl`}
                  >
                    arrow_forward_ios
                  </span>
                </div>
              </div>
              <ul
                className={`transition topbar ${
                  organicState ? "topbar-open text-2xl" : ""
                }`}
              >
                <li
                  onClick={() => console.log("oil")}
                  className="px-5 py-1 font-normal"
                >
                  Oil
                </li>
                <li
                  onClick={() => console.log("sauce")}
                  className="px-5 py-1 font-normal"
                >
                  Sauce
                </li>
              </ul>
            </li>
            <li className="flex px-5 cursor-pointer">
              <p>Contact Us</p>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TopBar;
