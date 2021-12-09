import React from "react";
const CardBody: React.FC = (props) => {
  return <div className="CardBody py-6 px-8">{props.children}</div>;
};

export default CardBody;
