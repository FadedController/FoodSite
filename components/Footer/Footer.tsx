const Footer = (props: {
  links: {
    facebook?: string;
    linkedin?: string;
  };
}): JSX.Element => {
  return (
    <div className="bg-blue-900 flex flex-col space-y-5 justify-center items-center h-28 mb-10 md:mb-0 opacity-90">
      <h1 className="text-gray-50 text-sm mx-4">
        Copyright 2021 | All Rights Reserved to Your Brand | Made by Axel
        Padilla
      </h1>
      <div className="flex space-x-5">
        <a href={props.links.facebook} target="_blank">
          <img src="../../../img/facebook.png" className="h-6" />
        </a>
        <a href={props.links.linkedin} target="_blank">
          <img src="../../../img/linkedin.png" className="h-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
