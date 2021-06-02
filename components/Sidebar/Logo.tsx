import React from "react";

interface logoProps {
  className?: string;
}

const Logo: React.FC<logoProps> = ({ className }) => {
  return <img src="../../img/logo.webp" className={className} />;
};

export default Logo;
