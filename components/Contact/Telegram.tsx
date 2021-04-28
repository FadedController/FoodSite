import { useState } from "react";

const Telegram = (props: { imagePath: string }): JSX.Element => {
  const [state, setState] = useState(false);

  return (
    <>
      <div
        onClick={() => setState(!state)}
        className="fixed cursor-pointer shadow-2xl w-full bottom-0 right-0 md:right-8 md:w-auto bg-blue-500 flex items-center justify-center md:rounded-t-lg"
      >
        <h1 className=" px-4 text-gray-50 flex-1">We can help you</h1>
        <div className="bg-blue-400 px-2 py-1 md:rounded-tr-lg">
          <img className="h-10 w-10 p-1" src={props.imagePath} />
        </div>
      </div>
      {/*Card popup */}
      <div
        className={`fixed transition h-full pt-16 md:pt-0 md:h-auto z-20 opacity-0 ${
          state ? "telegram-in opacity-100" : "telegram-out"
        } md:right-8 shadow-2xl bg-gray-50 md:max-w-sm w-full md:rounded-md`}
      >
        <div className="flex flex-col bg-blue-400 md:rounded-md">
          <div className="flex">
            <span
              onClick={() => setState(false)}
              className="flex cursor-pointer items-center material-icons transform rotate-180 ml-4"
            >
              arrow_forward_ios
            </span>
            <div className="flex-1 space-x-2 my-3 flex justify-center mr-8">
              <img
                className="h-14 rounded-full shadow-xl"
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              />
            </div>
          </div>
          <p className="font-semibold flex justify-center pb-4 px-2">
            If you need help, please click here to chat
          </p>
          <div className="flex cursor-pointer md:rounded-b-md bg-gray-50 hover:bg-gray-200 px-4 py-5">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              className="h-14 rounded-full shadow-xl"
            />

            <div className="flex-1 flex flex-col justify-center pl-3">
              <h4 className="font-semibold">Your Brand Agent</h4>
              <div className="flex items-center">
                Online
                <div className="ml-1 mt-1 h-2 w-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Telegram;
