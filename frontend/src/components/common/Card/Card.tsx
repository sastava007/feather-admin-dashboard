import React from "react";

const Card: React.FC = (props) => {
  return (
    <div className="Card bg-white shadow-lg rounded">{props.children}</div>
  );
};

export default Card;
