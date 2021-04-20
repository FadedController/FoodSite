import "../styles/globals.css";
import "../styles/custom.css";
import { FormspreeProvider } from "@formspree/react";

const App = ({ Component, pageProps }) => {
  return (
    <FormspreeProvider project="1659318231778721077">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
};

export default App;
