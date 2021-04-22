import { GetStaticProps } from "next";
import Head from "next/head";
import Telegram from "../../components/Contact/Telegram";
import Footer from "../../components/Footer/Footer";
import ProductsSection from "../../components/Products/ProductsSection";
import SideBar from "../../components/Sidebar/SideBar";
import TopBar from "../../components/Topbar/TopBar";
import { productsPagesData } from "../../data/data";
import { productPageDataType } from "../../data/dataInterface";

const Apparels = (props: { data: productPageDataType }): JSX.Element => {
  const { name, nav } = props.data;

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>Saching Trading - {name}</title>
      </Head>
      <div className="flex">
        <SideBar nav={nav} />
        {/*Content starts here */}
        <div className="flex flex-1 min-h-full flex-col">
          <TopBar nav={nav} />
          <ProductsSection pageData={props.data} />
          <Footer />
          <Telegram imagePath="../img/telegram.png" />
        </div>
        {/*Content ends here */}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const url = context.params.product; // { product: ... }
  let pageData;

  productsPagesData.pages.forEach((page) => {
    if (page.url.toLowerCase() === url) {
      pageData = page;
    } 
  });



  return {
    props: { data: pageData },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { product: "saree" } }, // See the "paths" section below
      { params: { product: "lehenga" } }, // See the "paths" section below
    ],

    fallback: false, // See the "fallback" section below
  };
}

export default Apparels;
