import React from "react";

import { links, mockUser } from "../../Utils/constants";

import { useEventsContext } from "../../Context/EventsContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useEventsContext();

  const accountLink = links[0];
  // MOCK DATA:
  const { id, username, email, imageUrl } = mockUser;

  return (
    <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-top">
        <div className="sb-top-logo-close">
          <div className="sb-top-logo">Logo</div>
          <h2 onClick={closeSidebar} className="sb-top-close">
            X
          </h2>
        </div>
        <div className="sb-top-account">Account</div>
      </div>
      <div className="sidebar-links"></div>
    </div>
  );
};

export default Sidebar;
