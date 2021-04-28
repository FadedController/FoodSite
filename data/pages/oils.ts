const OilsPage = {
  name: "Oils",
  url: "oils",
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
            href: "#",
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
    "Leveraging the skills of our qualified team of professionals, we are instrumental in offering a wide range of Cold Press Coconut Oil. We export high quality organic oils only.",
  cards: [
    {
      title: "Mango Seed Oil",
      description: "",
      image: "../products/oils_cold_pressed_mango_seed_oil.jpg",
    },
    {
      title: "Coconut Oil",
      description: "",
      image: "../products/oils_cold_pressed_coconut_oil.jpg",
    },
    {
      title: "Groundnut Oil",
      description: "",
      image: "../products/oils_cold_pressed_groundnut_oil.jpg",
    },
  ],
};

export default OilsPage;
