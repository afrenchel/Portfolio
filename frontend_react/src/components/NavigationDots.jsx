/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import { navlinks } from "../constants";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {navlinks.map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#46364a" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
