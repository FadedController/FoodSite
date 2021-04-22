import SideBar from "../components/Sidebar/SideBar";
import Head from "next/head";
import TopBar from "../components/Topbar/TopBar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Telegram from "../components/Contact/Telegram";
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
        <title>Saching Trading - Home</title>
      </Head>
      <div className="flex">
        <SideBar nav={nav} />
        {/*Content goes here*/}
        <div className="flex flex-1 min-h-full flex-col">
          <TopBar nav={nav} />
          <Main />
          <Footer />
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
