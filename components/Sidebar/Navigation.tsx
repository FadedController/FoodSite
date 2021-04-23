import { useState } from "react";
import { Nav } from "../../data/dataInterface";

const Navigation = (props: { nav: Nav }): JSX.Element => {
  const { nav } = props;
  let states = {};

  nav.sections.forEach((section) => {
    states[section.sectionName] = section.state;
  });

  const [navState, setNavState] = useState(states);

  return (
    <nav className="flex-1 flex flex-col justify-center text-blue-900  font-semibold text-2xl z-50">
      <ul className="flex-1 flex flex-col justify-center items-center space-y-5">
        {nav.sections.map((section) => (
          <div key={section.sectionName}>
            {section.sectionName === "Home" ? (
              <li
                className="transition px-8 w-nav cursor-pointer  hover:opacity-85"
                key={section.sectionName}
              >
                <a
                  href={section.href}
                  className="text-gray-600 hover:text-gray-500"
                >
                  Home
                </a>
              </li>
            ) : (
              <li
                key={section.sectionName}
                onMouseEnter={() => {
                  setNavState({ ...navState, [section.sectionName]: true });
                }}
                onMouseLeave={() => {
                  setNavState({ ...navState, [section.sectionName]: false });
                }}
                className="relative w-nav cursor-pointer flex items-center hover:opacity-95"
              >
                <a
                  href={section.href ? section.href : null}
                  className="transition hover:text-blue-800 mx-8 w-full"
                >
                  {section.sectionName}
                </a>
                {section.links && (
                  <>
                    <div className="w-12 ">
                      <span
                        className={`transition mt-1 ${
                          navState[section.sectionName]
                            ? "transform rotate-90"
                            : ""
                        } material-icons text-base`}
                      >
                        arrow_forward_ios
                      </span>
                    </div>
                    <ul
                      className={` ${
                        navState[section.sectionName]
                          ? "visible opacity-100"
                          : "invisible opacity-0"
                      } absolute transition -right min-w-menu bg-gray-100 font-normal text-lg divide-y divide-gray-500 py-2 px-5 rounded-sm shadow-md flex flex-col`}
                    >
                      {section.links.map((link) => (
                        <li className="py-2 flex" key={link.linkName}>
                          <a href={link.href} className="flex-1">
                            {link.linkName}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
