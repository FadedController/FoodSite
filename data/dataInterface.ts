/**Contain the information for making a card, with it's image, title and description */
interface Cards {
  /**The url or path to the image */
  image: string;
  /**The title of the card / Will be shown as bigger text than description */
  title: string;
  /**The description of the card, will be a paragraph of text */
  description?: string;
}
/**The data necessary for the navigation bar */
interface Nav {
  /**The link where clicking the logo on the navigation bar takes you.
   * Set as an empty string ("") if you don't want a link and (#) if it sould take you to the top of the current page
   */
  logoHref: string;
  /**Individual sections of the navigation bar, Home, Agro, Apparels, Contact Us */
  sections: {
    /**The name of the section that will appear on the navigation bar*/
    sectionName: string;
    /**The link that triggers when clicking on the sectionName */
    href: string;
    /**Determines whether the submenu, if there is any, is opened or closed by default.
     * @default false
     */
    state: boolean;
    /**An array of all of the links on the respective submenus */
    links?: {
      /**The name that appears on the submenu  */
      linkName: string;
      /**The link triggered when clicking the linkName */
      href: string;
    }[];
  }[];
}

/**The homepage needed data */
interface homePageDataType {
  /**Navigation for the home page */
  nav: Nav;
}

/**The products pages needed data */
interface productPageDataType {
  /**The url where they should appear
   * @example url: "interesting" // localhost:3000/subdirectory/interesting
   */
  url: string;
  /**
   * The name of the page, it is used on the page top as title
   */
  name: string;
  /**The description of the page, it appears as a paragraph below the title */
  description: string;
  /**The name of the submenu this product corresponds to
   * @example submenu: "Apparels" // sarree corresponds to the Apparels section
   */
  submenu: string;
  /**The navigation of this page */
  nav: Nav;
  /**An array of all of the page's cards */
  cards?: Cards[];
}

export type { productPageDataType, homePageDataType, Nav };
