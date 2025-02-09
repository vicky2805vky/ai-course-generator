import React from "react";

const NavigationLinks = (props: React.HTMLAttributes<HTMLLIElement>) => {
  const navLinks = ["Home", "Explore", "Features", "Pricing"];
  return navLinks.map((link) => <li {...props}>{link}</li>);
};

export default NavigationLinks;
