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
      cards: [
        {
          title: "This is card 1",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 2",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 3",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 4",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 5",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 6",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 7",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
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
      cards: [
        {
          title: "This is card 1",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 2",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 3",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 4",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 5",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 6",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 7",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
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
      cards: [
        {
          title: "This is card 1",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 2",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 3",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 4",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 5",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 6",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 7",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
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
      cards: [
        {
          title: "This is card 1",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 2",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 3",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 4",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 5",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 6",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 7",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
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
      cards: [
        {
          title: "This is card 1",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 2",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 3",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 4",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 5",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 6",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 7",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
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
      cards: [
        {
          title: "This is card 1",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 2",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 3",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 4",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 5",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 6",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "This is card 7",
          image:
            "https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    },
  ],
};

export { productsPagesData, homePageData };
