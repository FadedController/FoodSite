import { useState } from "react";
import { Nav } from "../../data/dataInterface";
import Logo from "../Sidebar/Logo";

const TopBar = (props: { nav: Nav }): JSX.Element => {
  const [state, setState] = useState(false);
  const [organicState, setOrganicState] = useState(false);
  const [apparelsState, setApparelsState] = useState(false);
  const { nav } = props;
  let states = {};

  nav.sections.forEach((section) => {
    states[section.sectionName] = section.state;
  });

  const [navState, setNavState] = useState(states);

  return (
    <>
      <div className="md:hidden flex flex-col shadow-xl bg-gray-50 sticky top-0 z-10">
        <div className="flex items-center">
          <div className="flex-1 flex flex-col font-bold text-3xl p-4">
            <a href={nav.logoHref}>
              <Logo className="w-16" />
            </a>
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
            {nav.sections.map((section) => (
              <div key={section.sectionName}>
                {section.sectionName === "Home" ? (
                  <li className="px-5 flex cursor-pointer">
                    <a href={section.href} className="text-gray-600">
                      Home
                    </a>
                  </li>
                ) : (
                  <li
                    className="flex flex-col px-5 cursor-pointer"
                    onClick={() =>
                      setNavState({
                        ...navState,
                        [section.sectionName]: !navState[section.sectionName],
                      })
                    }
                  >
                    <div className="flex">
                      <a href={section.href ? section.href : null}>
                        {section.sectionName}
                      </a>
                      {section.links && (
                        <div>
                          <span
                            className={`${
                              apparelsState ? "transform rotate-90" : ""
                            } material-icons mx-4 mt-1 text-xl`}
                          >
                            arrow_forward_ios
                          </span>
                        </div>
                      )}
                    </div>
                    {section.links && (
                      <ul
                        className={`transition topbar ${
                          navState[section.sectionName]
                            ? "topbar-open text-2xl"
                            : ""
                        }`}
                      >
                        {section.links.map((link) => (
                          <li
                            className="px-5 py-1 font-normal"
                            key={link.linkName}
                          >
                            <a href={link.href}>{link.linkName}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TopBar;
