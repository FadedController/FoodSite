import { productPageDataType } from "../dataInterface";

const OleoresinPage: productPageDataType = {
  name: "Oleoresin",
  url: "oleoresin",
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
          { href: "../extracts/curcumin", linkName: "Curcumin" },
          { href: "#", linkName: "Oleoresin" },
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
      title: "Oleoresin",
      description:
        "We provide all types of oleoresins from black pepper , Cardmom, Capsicum etc.",
      image: "../products/oleoresin.jpg",
    },
  ],
};

export default OleoresinPage;
