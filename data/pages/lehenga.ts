const LehengaPage = {
  name: "Lehenga",
  url: "lehenga",
  submenu: "Apparels",
  nav: {
    logoHref: "/",
    sections: [
      { sectionName: "Home", href: "/", state: false },
      {
        sectionName: "Agro",
        href: "",
        state: false,
        links: [
          {
            linkName: "Cereals",
            href: "../agro/cereals",
          },
          {
            linkName: "Oils",
            href: "../agro/oils",
          },
          {
            linkName: "Organic Products",
            href: "../agro/organic-products",
          },
          {
            linkName: "Pulses",
            href: "../agro/pulses",
          },
          {
            linkName: "Spices",
            href: "../agro/spices",
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
      title: "Lehenga",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "../products/lehenga.jpg",
    },
  ],
};

export default LehengaPage;
