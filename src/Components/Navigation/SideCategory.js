import React from "react";

const SideCategory = (props) => {
  const { icon, id, category } = props;
  return (
    <div className="sideCategory-container">
      <div className="sc-left">{icon}</div>
      <div className="sc-right">{category}</div>
    </div>
  );
};

export default SideCategory;
