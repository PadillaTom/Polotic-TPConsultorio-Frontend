import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const SideCategory = (props) => {
  const { icon, category, id } = props;

  if (category === "Dashboard") {
    return (
      <div className="sideCategory-container">
        <div className="sc-left-container">
          <div className="sc-left">{icon}</div>
          <div className="sc-right">{category}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="sideCategory-container">
      <div className="sc-left-container">
        <div className="sc-left">{icon}</div>
        <div className="sc-right">{category}</div>
      </div>
      <div className="sc-right-container ">
        <AiOutlineDown></AiOutlineDown>
      </div>
    </div>
  );
};

export default SideCategory;
