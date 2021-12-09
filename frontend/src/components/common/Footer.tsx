import React from "react";
import clsx from "clsx";

const Footer: React.FC = () => {
  return (
    <div className="px-8  h-14 flex items-center justify-between text-gray-400 text-sm">
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://feather-insurance.com/"
          className={clsx("text-primary-600 hover:underline")}
        >
          Feather Insurance
        </a>{" "}
        | Admin Panel
      </div>
      <div>
        Built by{" "}
        <a
          href="https://www.github.com/sastava007"
          target="_blank"
          rel="noreferrer"
          className={clsx("text-primary-600 hover:underline")}
        >
          Shivansh Srivastava
        </a>
      </div>
    </div>
  );
};

export default Footer;
