import NavContact from "./NavContact";
import Navigation from "./Navigation";
import { Nav } from "../../data/dataInterface";
import Logo from "./Logo";

const SideBar = (props: { nav: Nav }): JSX.Element => {
  const { logoHref } = props.nav;
  return (
    <nav className="hidden md:block">
      <div className="w-nav h-screen min-h-nav w-full flex flex-col bg-gray-50 shadow-2xl sticky top-0">
        {/*Replace this with a image */}
        <div className="flex flex-col mt-6 font-bold text-5xl cursor-pointer items-center">
          <a href={logoHref}>
            <Logo className="px-8 py-8" />
          </a>
        </div>
        <Navigation nav={props.nav} />
        <NavContact />
      </div>
    </nav>
  );
};

export default SideBar;
