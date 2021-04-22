interface Cards {
  image: string;
  title: string;
  description?: string;
}

interface Nav {
  logoHref: string;
  sections: {
    sectionName: string;
    href: string;
    state: boolean;
    links?: { linkName: string; href: string }[];
  }[];
}

interface homePageDataType {
  nav: Nav;
}

interface productPageDataType {
  url: string;
  name: string;
  description: string;
  submenu: string;
  nav: Nav;
  cards?: Cards[];
}

export type { productPageDataType, homePageDataType, Nav };
