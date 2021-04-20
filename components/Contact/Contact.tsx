import { useForm } from "@formspree/react";
import { useState } from "react";
import Dialogs from "./Dialogs";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("contact");
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    message: "",
    email: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    //handleSubmit(form); // wait til prod
    setForm({
      name: "",
      phoneNumber: "",
      message: "",
      email: "",
    });
  };

  const onReset = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      phoneNumber: "",
      message: "",
      email: "",
    });
  };

  return (
    <div className="flex items-center justify-center" id="contact">
      <form
        className="flex p-4 md:p-10 space-y-5 flex-col bg-white max-w-4xl rounded-xl w-full mx-5 my-6 shadow-xl"
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <h2 className="text-blue-900 ml-1 text-4xl font-semibold">
          Contact Us
        </h2>
        <div className="flex flex-1 flex-col justify-center space-y-2">
          <h3 className="text-xl font-semibold ml-1">Name</h3>
          <input
            className="shadow-inner px-5 bg-gray-50 rounded-full h-10"
            name="name"
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 md:space-y-0 space-y-5">
          <div className="flex flex-col flex-1 space-y-2">
            <h3 className="text-xl font-semibold ml-1">Email</h3>
            <input
              name="email"
              id="email"
              type="email"
              className="shadow-inner px-5 bg-gray-50 rounded-full h-10"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col flex-1 space-y-2">
            <h3 className="text-xl font-semibold ml-1">Phone Number</h3>
            <input
              name="phone-number"
              id="phone-number"
              type="text"
              className="shadow-inner px-5 bg-gray-50 rounded-full h-10"
              value={form.phoneNumber}
              onChange={(e) =>
                setForm({ ...form, phoneNumber: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex space-y-2 flex-col">
          <h3 className="text-xl font-semibold ml-1">Message</h3>
          <textarea
            name="message"
            id="message"
            className="shadow-inner px-5 py-4 bg-gray-50 rounded-2xl h-56"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <div className="flex justify-center space-x-5 opacity-95 pt-3">
          <button
            type="submit"
            className="font-semibold px-4 py-2 bg-yellow-400 hover:bg-yellow-300 rounded-md text-xl"
          >
            Submit
          </button>
          <button
            type="reset"
            className="font-semibold px-4 py-2 text-gray-50 bg-blue-900 hover:bg-blue-800 rounded-md text-xl"
          >
            Reset
          </button>
        </div>
      </form>
      <Dialogs state={state} />
    </div>
  );
};

export default ContactForm;
