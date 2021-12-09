import React from "react";
const Header: React.FC = () => {
  return (
    <div
      className="
            TheHeader
            absolute flex w-full h-full items-center px-8
            bg-purple-500
          "
    >
      <div className="text-white text-2xl font-black">Admin Panel</div>
    </div>
  );
};

export default Header;
