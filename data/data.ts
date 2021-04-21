import { homePageDataType, productPageDataType } from "./dataInterface";

const productsPagesData: { pages: productPageDataType[] } = {
  pages: [
    {
      name: "Sari",
      submenu: "Apparels",
      links: {
        home: "/",
        logo: "#",
        sari: "#",
        contactUs: "#contact",
        juice: "../products/juice",
        lehenga: "../products/lehenga",
        oil: "../products/oil",
        spices: "../products/spices",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      cards: [],
    },
    {
      name: "Lehenga",
      submenu: "Apparels",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      links: {
        home: "/",
        logo: "#",
        sari: "../products/sari",
        contactUs: "#contact",
        juice: "../products/juice",
        lehenga: "#",
        oil: "../products/oil",
        spices: "../products/spices",
      },
      cards: [],
    },
    {
      name: "Oil",
      submenu: "Organic Food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      links: {
        home: "/",
        logo: "#",
        sari: "../products/sari",
        contactUs: "#contact",
        juice: "../products/juice",
        lehenga: "../products/lehenga",
        oil: "#",
        spices: "../products/spices",
      },
      cards: [],
    },
    {
      name: "Juice",
      submenu: "Organic Food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      links: {
        home: "/",
        logo: "#",
        sari: "../products/sari",
        contactUs: "#contact",
        juice: "#",
        lehenga: "../products/lehenga",
        oil: "../products/oil",
        spices: "../products/spices",
      },
      cards: [],
    },
    {
      name: "Spices",
      submenu: "Spices",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      links: {
        home: "/",
        logo: "#",
        sari: "../products/sari",
        contactUs: "#contact",
        juice: "../products/juice",
        lehenga: "../products/lehenga",
        oil: "../products/oil",
        spices: "#",
      },
      cards: [],
    },
  ],
};

const homePageData: homePageDataType = {
  links: {
    contactUs: "#contact",
    home: "#",
    juice: "/products/juice",
    lehenga: "/products/lehenga",
    logo: "#",
    oil: "/products/oil",
    sari: "/products/sari",
    spices: "/products/spices",
  },
};

export { productsPagesData, homePageData };
