import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const menu = [
  {
    name: "Dashboard",
    link: "/",
  },
  {
    name: "Customer",
    link: "/customer",
  },
  {
    name: "Settings",
    link: "/settings",
  },
];

const Nav: React.FC = () => {
  return (
    <div id="AppSidebarNav" className="px-4 py-4">
      <div className="mb-10">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={clsx(`
          block px-4 py-3 pl-12 mb-1
          rounded-xl font-semibold
          text-gray-600
          hover:text-gray-900
          hover:bg-primary-50
          transition
          `)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Nav;
