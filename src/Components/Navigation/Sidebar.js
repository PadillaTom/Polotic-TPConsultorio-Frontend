import React from "react";

import { useEventsContext } from "../../Context/EventsContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useEventsContext();

  return (
    <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      992 + Sidebar
      <br />
      <br />
      <br />
      <h2 onClick={closeSidebar}>close</h2>
    </div>
  );
};

export default Sidebar;
