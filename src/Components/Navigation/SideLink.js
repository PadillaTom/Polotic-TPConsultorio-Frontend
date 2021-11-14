import React from "react";
import { Link } from "react-router-dom";

import { useEventsContext } from "../../Context/EventsContext";

const SideLink = (props) => {
  const { closeSidebar } = useEventsContext();
  const { title, url, icon } = props.singleLink;
  return (
    <Link to={url} onClick={closeSidebar}>
      <div className="singleLink-container">
        <div className="sl-left">{icon}</div>
        <div className="sl-right">{title}</div>
      </div>
    </Link>
  );
};

export default SideLink;
