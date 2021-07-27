import CerealsPage from "./pages/cereals";
import { homePageDataType, productPageDataType } from "./dataInterface";
import OilsPage from "./pages/oils";
import OrganicProductsPage from "./pages/organicProducts";
import PulsesPage from "./pages/pulses";
import SpicesPage from "./pages/spices";
import LehengaPage from "./pages/lehenga";
import SareePage from "./pages/saree";
import HomePage from "./pages";
import CurcuminPage from "./pages/curcumin";
import OleoresinPage from "./pages/oleoresin";

/**
 * The homePage data, including the navigation on index
 */

const homePageData: homePageDataType = HomePage;

/**
 * The data of all of the product pages, including navigation, cards, etc
 */

const productsPagesData: { pages: productPageDataType[] } = {
  pages: [
    CerealsPage,
    OilsPage,
    OrganicProductsPage,
    PulsesPage,
    SpicesPage,
    LehengaPage,
    SareePage,
    CurcuminPage,
    OleoresinPage,
  ],
};

export { productsPagesData, homePageData };
