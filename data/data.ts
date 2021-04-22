import { homePageDataType, productPageDataType } from "./dataInterface";

const homePageData: homePageDataType = {
  nav: {
    logoHref: "#",
    sections: [
      { sectionName: "Home", href: "", state: false },
      {
        sectionName: "Agrocereals",
        href: "",
        state: false,
        links: [
          {
            linkName: "Oil",
            href: "/agrocereals/oil",
          },
          {
            linkName: "Organic Product",
            href: "/agrocereals/organic-product",
          },
          {
            linkName: "Pulses",
            href: "/agrocereals/pulses",
          },
          {
            linkName: "Spices",
            href: "/agrocereals/spices",
          },
        ],
      },
      {
        sectionName: "Apparels",
        href: "",
        state: false,
        links: [
          {
            linkName: "Lehenga",
            href: "/apparels/lehenga",
          },
          {
            linkName: "Saree",
            href: "/apparels/saree",
          },
        ],
      },
      {
        sectionName: "Contact Us",
        href: "#contact",
        state: false,
      },
    ],
  },
};

const productsPagesData: { pages: productPageDataType[] } = {
  pages: [
    {
      name: "Oil",
      url: "oil",
      submenu: "Agrocereals",
      nav: {
        logoHref: "/",
        sections: [
          { sectionName: "Home", href: "/", state: false },
          {
            sectionName: "Agrocereals",
            href: "",
            state: false,
            links: [
              {
                linkName: "Oil",
                href: "#",
              },
              {
                linkName: "Organic Product",
                href: "../agrocereals/organic-product",
              },
              {
                linkName: "Pulses",
                href: "../agrocereals/pulses",
              },
              {
                linkName: "Spices",
                href: "../agrocereals/spices",
              },
            ],
          },
          {
            sectionName: "Apparels",
            href: "",
            state: false,
            links: [
              {
                linkName: "Lehenga",
                href: "../apparels/lehenga",
              },
              {
                linkName: "Saree",
                href: "../apparels/saree",
              },
            ],
          },
          {
            sectionName: "Contact Us",
            href: "#contact",
            state: false,
          },
        ],
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      cards: [],
    },
    {
      name: "Organic Product",
      url: "organic-product",
      submenu: "Agrocereals",
      nav: {
        logoHref: "/",
        sections: [
          { sectionName: "Home", href: "/", state: false },
          {
            sectionName: "Agrocereals",
            href: "",
            state: false,
            links: [
              {
                linkName: "Oil",
                href: "../agrocereals/oil",
              },
              {
                linkName: "Organic Product",
                href: "#",
              },
              {
                linkName: "Pulses",
                href: "../agrocereals/pulses",
              },
              {
                linkName: "Spices",
                href: "../agrocereals/spices",
              },
            ],
          },
          {
            sectionName: "Apparels",
            href: "",
            state: false,
            links: [
              {
                linkName: "Lehenga",
                href: "../apparels/lehenga",
              },
              {
                linkName: "Saree",
                href: "../apparels/saree",
              },
            ],
          },
          {
            sectionName: "Contact Us",
            href: "#contact",
            state: false,
          },
        ],
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      cards: [],
    },

    {
      name: "Pulses",
      url: "pulses",
      submenu: "Agrocereals",
      nav: {
        logoHref: "/",
        sections: [
          { sectionName: "Home", href: "/", state: false },
          {
            sectionName: "Agrocereals",
            href: "",
            state: false,
            links: [
              {
                linkName: "Oil",
                href: "../agrocereals/oil",
              },
              {
                linkName: "Organic Product",
                href: "../agrocereals/organic-product",
              },
              {
                linkName: "Pulses",
                href: "#",
              },
              {
                linkName: "Spices",
                href: "../agrocereals/spices",
              },
            ],
          },
          {
            sectionName: "Apparels",
            href: "",
            state: false,
            links: [
              {
                linkName: "Lehenga",
                href: "../apparels/lehenga",
              },
              {
                linkName: "Saree",
                href: "../apparels/saree",
              },
            ],
          },
          {
            sectionName: "Contact Us",
            href: "#contact",
            state: false,
          },
        ],
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      cards: [],
    },
    {
      name: "Spices",
      url: "spices",
      submenu: "Agrocereals",
      nav: {
        logoHref: "/",
        sections: [
          { sectionName: "Home", href: "/", state: false },
          {
            sectionName: "Agrocereals",
            href: "",
            state: false,
            links: [
              {
                linkName: "Oil",
                href: "../agrocereals/oil",
              },
              {
                linkName: "Organic Product",
                href: "../agrocereals/organic-product",
              },
              {
                linkName: "Pulses",
                href: "../agrocereals/pulses",
              },
              {
                linkName: "Spices",
                href: "#",
              },
            ],
          },
          {
            sectionName: "Apparels",
            href: "",
            state: false,
            links: [
              {
                linkName: "Lehenga",
                href: "../apparels/lehenga",
              },
              {
                linkName: "Saree",
                href: "../apparels/saree",
              },
            ],
          },
          {
            sectionName: "Contact Us",
            href: "#contact",
            state: false,
          },
        ],
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      cards: [],
    },

    {
      name: "Lehenga",
      url: "lehenga",
      submenu: "Apparels",
      nav: {
        logoHref: "/",
        sections: [
          { sectionName: "Home", href: "/", state: false },
          {
            sectionName: "Agrocereals",
            href: "",
            state: false,
            links: [
              {
                linkName: "Oil",
                href: "../agrocereals/oil",
              },
              {
                linkName: "Organic Product",
                href: "../agrocereals/organic-product",
              },
              {
                linkName: "Pulses",
                href: "../agrocereals/pulses",
              },
              {
                linkName: "Spices",
                href: "../agrocereals/spices",
              },
            ],
          },
          {
            sectionName: "Apparels",
            href: "",
            state: false,
            links: [
              {
                linkName: "Lehenga",
                href: "#",
              },
              {
                linkName: "Saree",
                href: "../apparels/saree",
              },
            ],
          },
          {
            sectionName: "Contact Us",
            href: "#contact",
            state: false,
          },
        ],
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      cards: [],
    },
    {
      name: "Saree",
      url: "saree",
      submenu: "Apparels",
      nav: {
        logoHref: "/",
        sections: [
          { sectionName: "Home", href: "/", state: false },
          {
            sectionName: "Agrocereals",
            href: "",
            state: false,
            links: [
              {
                linkName: "Oil",
                href: "../agrocereals/oil",
              },
              {
                linkName: "Organic Product",
                href: "../agrocereals/organic-product",
              },
              {
                linkName: "Pulses",
                href: "../agrocereals/pulses",
              },
              {
                linkName: "Spices",
                href: "../agrocereals/spices",
              },
            ],
          },
          {
            sectionName: "Apparels",
            href: "",
            state: false,
            links: [
              {
                linkName: "Lehenga",
                href: "../apparels/lehenga",
              },
              {
                linkName: "Saree",
                href: "#",
              },
            ],
          },
          {
            sectionName: "Contact Us",
            href: "#contact",
            state: false,
          },
        ],
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      cards: [],
    },
  ],
};

export { productsPagesData, homePageData };
