import React from "react";
import { AiOutlineDown } from "react-icons/ai";

import { useEventsContext } from "../../Context/EventsContext";

const SideCategory = (props) => {
  const { icon, category } = props;
  const { closeSidebar } = useEventsContext();

  if (category === "Dashboard") {
    return (
      <div className="sideCategory-container" onClick={closeSidebar}>
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
