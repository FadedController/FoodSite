import NavContact from "./NavContact";
import Navigation from "./Navigation";

const SideBar = (): JSX.Element => {
  return (
    <nav className="hidden md:block">
      <div className="w-nav h-screen min-h-nav w-full flex flex-col bg-gray-50 shadow-2xl sticky top-0">
        {/*Replace this with a image */}
        <div className="flex flex-col mt-6 font-bold text-5xl cursor-pointer items-center">
          <a href="#">
            <h1 className="text-yellow-500">Your</h1>
            <h1 className="text-blue-900">Brand</h1>
          </a>
        </div>
        <Navigation />
        <NavContact />
      </div>
    </nav>
  );
};

export default SideBar;
