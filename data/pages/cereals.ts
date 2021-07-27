import { productPageDataType } from "../dataInterface";

const CerealsPage: productPageDataType = {
  name: "Cereals",
  url: "cereals",
  submenu: "Agro",
  description:
    "We export all major cereals including rice, wheat, daal[lentils], Millet, Barley etc.",
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
            href: "#",
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
  cards: [
    {
      title: "Rice",
      description: "Ir 64, Basmati, kolam, Sona, black, samba rice, etc.",
      image: "../products/cereal_rice.jpg",
    },
    {
      title: "Wheat",
      description: "Californina Long Wheat, Red wheat, etc.",
      image: "../products/cereal_wheat.jpg",
    },
  ],
};

export default CerealsPage;
