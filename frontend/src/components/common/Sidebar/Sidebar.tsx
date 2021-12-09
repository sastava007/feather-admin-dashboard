import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import logo from "../../../assets/logo.png";

const Sidebar: React.FC = () => {
  return (
    <div className="TheSidebar absolute h-full w-full flex flex-col">
      <div className="h-20 flex items-center top-0 px-4">
        <NavLink to="/" className="flex items-center ">
          <img
            src={logo}
            className="ml-2 mr-1 text-primary-500 align-middle"
            style={{ height: 70, width: 70 }}
            alt="Feather Admin Dashboard"
          />{" "}
          <span className="font-bold  align-middle relative ">
            Feather Insurance
          </span>
        </NavLink>
      </div>
      <div className="SidebarNavContainer flex-1 overflow-y-auto ">
        <Nav />
      </div>
      <div
        className="
          SidebarFooterContainer
          px-4 py-2 text-sm bg-opacity-75 text-center flex justify-around items-center
          h-14
        "
      ></div>
    </div>
  );
};

export default Sidebar;
