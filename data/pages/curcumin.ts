import { productPageDataType } from "../dataInterface";

const CurcuminPage: productPageDataType = {
  name: "Curcumin",
  url: "curcumin",
  submenu: "Extracts",
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
          { href: "#", linkName: "Curcumin" },
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
  description: "",
  cards: [
    {
      title: "Curcumin",
      description:
        "We provide best quality curcumin with 96% purity. This can be increased/decreased as per clients needs.",
      image: "../products/curcumin.webp",
    },
  ],
};

export default CurcuminPage;
