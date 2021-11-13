import React from "react";
import { Link } from "react-router-dom";

const SideLink = (props) => {
  const { title, url, icon } = props.singleLink;
  return (
    <Link to={url}>
      <div className="singleLink-container">
        <div className="sl-left">{icon}</div>
        <div className="sl-right">{title}</div>
      </div>
    </Link>
  );
};

export default SideLink;
