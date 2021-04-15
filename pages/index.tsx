import SideBar from "../components/Sidebar/SideBar";
import Head from "next/head";
import TopBar from "../components/Topbar/TopBar";
import Main from "../components/Main/Main";

const IndexPage = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className="flex">
        <SideBar />
        {/*Content goes here*/}
        <div className="flex flex-1 min-h-full flex-col">
          <TopBar />
          <Main />
        </div>
        {/*Content ends here */}
      </div>
    </>
  );
};

export default IndexPage;
