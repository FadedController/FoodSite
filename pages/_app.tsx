import "tailwindcss/tailwind.css";
import "../styles/custom.css";
import { FormspreeProvider } from "@formspree/react";
import ContactContext from "../components/Contact/ContactContext";
import { useState } from "react";

const App = ({ Component, pageProps }) => {
  const contactForm = useState({
    name: "",
    phoneNumber: "",
    message: "",
    email: "",
  });

  return (
    <FormspreeProvider project="your-formspree-project">
      <ContactContext.Provider value={contactForm}>
        <Component {...pageProps} />
      </ContactContext.Provider>
    </FormspreeProvider>
  );
};

export default App;
