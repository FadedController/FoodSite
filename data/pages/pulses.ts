const PulsesPage = {
  name: "Pulses",
  url: "pulses",
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
            href: "#",
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
        sectionName: "Extracts",
        href: "",
        state: false,
        links: [
          { href: "../extracts/curcumin", linkName: "Curcumin" },
          { href: "../extracts/oleoresin", linkName: "Oleoresin" },
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
    "Hand picked pulses where they are best grown from. We export wide range of best quality pulses direct from farm to customer.No Preservatives, Organic, No Artificial Flavour, No Genetic Engineering, Gluten Free, High in Protein.",
  cards: [
    {
      title: "Chick Peas",
      description: "",
      image: "../products/pulses_chick_pease.jpg",
    },
    {
      title: "Red Lentils",
      description: "",
      image: "../products/pulses_red_lentil.jpg",
    },
    {
      title: "Soy Beans",
      description: "",
      image: "../products/pulses_soy_bean.jpg",
    },
    {
      title: "Red Beans",
      description: "",
      image: "../products/pulses_red_beans.jpg",
    },
  ],
};

export default PulsesPage;
