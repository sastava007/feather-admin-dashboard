import React from "react";
import clsx from "clsx";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Sidebar from "./common/Sidebar/Sidebar";

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="w-full mx-auto flex">
      <div
        id="AppSidebarContainer"
        className={clsx(
          `
                z-40 inset-0 flex-none h-screen
                fixed lg:sticky top-0
                lg:block lg:left-0 xl:left-0
                w-full lg:w-60 xl:w-72
                shadow-xl
                -left-full
              `
        )}
      >
        <div
          className={clsx(
            `
                absolute t-0 w-60 xl:w-72 h-full
                lg:left-0
                ease-in-out
                transition-all
                duration-300
                bg-white
                -left-full md:-left-full
              `
          )}
        >
          <Sidebar />
        </div>
      </div>

      <div
        id="AppContentContainer"
        className="w-full min-h-screen flex-auto flex flex-col"
        style={{ backgroundColor: "rgb(114 142 156 / 5%)" }}
      >
        <div
          id="AppHeaderContainer"
          className="w-full h-20 sticky top-0 self-start flex-grow-0"
        >
          <Header />
        </div>
        <div id="AppPageContainer" className="flex-1">
          {children}
        </div>
        <div id="AppFooterContainer" className="flex-grow-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
