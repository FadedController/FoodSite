import CerealsPage from "./pages/cereals";
import { homePageDataType, productPageDataType } from "./dataInterface";
import OilsPage from "./pages/oils";
import OrganicProductsPage from "./pages/organicProducts";
import PulsesPage from "./pages/pulses";
import SpicesPage from "./pages/spices";
import LehengaPage from "./pages/lehenga";
import SareePage from "./pages/saree";
import HomePage from "./pages";

const homePageData: homePageDataType = HomePage;

const productsPagesData: { pages: productPageDataType[] } = {
  pages: [
    CerealsPage,
    OilsPage,
    OrganicProductsPage,
    PulsesPage,
    SpicesPage,
    LehengaPage,
    SareePage,
  ],
};

export { productsPagesData, homePageData };
