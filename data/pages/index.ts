const HomePage = {
  nav: {
    logoHref: "#",
    sections: [
      { sectionName: "Home", href: "", state: false },
      {
        sectionName: "Agro",
        href: "",
        state: false,
        links: [
          {
            linkName: "Cereals",
            href: "/agro/cereals",
          },
          {
            linkName: "Oils",
            href: "/agro/oils",
          },
          {
            linkName: "Organic Products",
            href: "/agro/organic-products",
          },
          {
            linkName: "Pulses",
            href: "/agro/pulses",
          },
          {
            linkName: "Spices",
            href: "/agro/spices",
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

export default HomePage;
