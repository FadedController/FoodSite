import SideBar from "../components/Sidebar/SideBar";
import Head from "next/head";
import TopBar from "../components/Topbar/TopBar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Telegram from "../components/Contact/Telegram";
import BackToTop from "../components/Footer/BackToTop";
import { homePageData } from "../data/data";
import { homePageDataType } from "../data/dataInterface";
import { GetStaticProps } from "next";

const IndexPage = (props: { data: homePageDataType }): JSX.Element => {
  const { nav } = props.data;

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="shortcut icon" type="image/webp" href="img/logo.webp" />
        <meta
          name="description"
          content="Sachin Trading Company is a global exporter in apparel, Indian spices, Organic foods. We are flexible enough to meet the requirements of all around the globe including USA, EU, ASIA, Africa and Australia."
        />
        <title>Home - Sachin Global Traders</title>
      </Head>
      <div className="flex">
        <SideBar nav={nav} />
        {/*Content goes here*/}
        <div className="flex flex-1 flex-col">
          <TopBar nav={nav} />
          <Main />
          <Footer
            links={{
              facebook: "#",
              linkedin:
                "https://www.linkedin.com/company/sachin-global-traders/",
            }}
          />
          <BackToTop />
          <Telegram imagePath="img/telegram.png" />
        </div>
        {/*Content ends here */}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { data: homePageData },
  };
};

export default IndexPage;
