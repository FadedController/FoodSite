const SpicesPage = {
  name: "Spices",
  url: "spices",
  submenu: "Agro",
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
    "We are offering wide range of qualitative spices, these are checked by our quality experts on various quality parameter before deliver them to client.",
  cards: [
    {
      title: "Black Pepper",
      description: "",
      image: "../products/spices_black_pepper.jpg",
    },
    {
      title: "Cardamom",
      description: "",
      image: "../products/spices_cardamom.jpg",
    },
    {
      title: "Cloves",
      description: "",
      image: "../products/spices_cloves.jpg",
    },
    {
      title: "Red Chilli Powder",
      description: "",
      image: "../products/spices_red_chilli_powder.jpg",
    },
  ],
};

export default SpicesPage;
