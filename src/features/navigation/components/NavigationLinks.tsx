import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLinks = (props: React.HTMLAttributes<HTMLLIElement>) => {
  const navLinks = ["home", "explore", "features", "pricing"];
  return navLinks.map((link, i) => (
    <li key={i} {...props}>
      <NavLink to={`/${link}`} className="flex-1 capitalize">
        {link}
      </NavLink>
    </li>
  ));
};

export default NavigationLinks;
