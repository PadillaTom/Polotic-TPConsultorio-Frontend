import React from "react";

import { CgMenuGridO } from "react-icons/cg";
import { BiUserCircle, BiBell } from "react-icons/bi";

import { useEventsContext } from "../../Context/EventsContext";

const Navbar = () => {
  const { openSidebar } = useEventsContext();

  return (
    <div className="navbar-container">
      <div className="navbar-center">
        <div className="navbar-left">
          <CgMenuGridO
            className="nl-menu-icon"
            onClick={openSidebar}
          ></CgMenuGridO>
        </div>
        <div className="navbar-right">
          <div className="navbar-right-container">
            <BiBell className="nr-menu-notifications"></BiBell>
            <BiUserCircle className="nr-menu-user"></BiUserCircle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
