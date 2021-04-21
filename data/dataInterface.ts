interface Cards {
  image: string;
  title: string;
  description?: string;
}

interface Links {
  logo: string;
  home: string;
  lehenga: string;
  sari: string;
  oil: string;
  juice: string;
  spices: string;
  contactUs: string;
}

interface homePageDataType {
  links: Links;
}

interface productPageDataType {
  name: string;
  description: string;
  submenu: string;
  links: Links;
  cards?: Cards[];
}

export type { productPageDataType, homePageDataType };
