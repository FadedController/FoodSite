import { useState } from "react";

const NavContact = (): JSX.Element => {
  const [open, setOpen] = useState(true);
  // A-03, Vasant-Lila society, Mahajan Wadi, Mira-Gavthan, Thane-401107, Maharashtra, India

  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-yellow-500 text-xl font-bold">
      <div
        onClick={() => setOpen(!open)}
        className="pt-4 w-nav flex justify-center bg-gray-50 shadow-inner cursor-pointer"
      >
        <p>Contact Information</p>
        <div className="ml-3">
          <span
            className={`material-icons ${
              open ? "transform rotate-90" : "transform -rotate-90"
            } text-base`}
          >
            arrow_forward_ios
          </span>
        </div>
      </div>
      <div className={`contact ${open ? "contact-open" : ""}`}>
        <ul className="flex flex-col items-center justify-center space-y-2 text-base font-normal">
          <li>Maharashtra, India </li>
          <li className="char-w text-center">
            A-03, Vasant-Lila society, Mahajan Wadi, Mira-Gavthan, Thane-401107
          </li>
          <li>+91-9930249626</li>
          <li className="pb-4 pt-1 text-gray-500 text-sm underline">
            enquire@sachinglobaltraders.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavContact;
