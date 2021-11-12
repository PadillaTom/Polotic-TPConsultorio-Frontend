import React from "react";

import {
  patientLinks,
  dentistLinks,
  dataLinks,
  mockUser,
} from "../../Utils/constants";

import { useEventsContext } from "../../Context/EventsContext";
import SideLink from "./SideLink";
import SideCategory from "./SideCategory";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useEventsContext();

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
      <div className="sidebar-links">
        <SideLink id={1} title="Dashboard" url="/" icon="icon"></SideLink>
        <SideCategory category="Patient" icon="Icon"></SideCategory>
        {patientLinks.map((singleLink) => {
          return (
            <SideLink key={singleLink.id} singleLink={singleLink}></SideLink>
          );
        })}
        <SideCategory category="Dentist" icon="Icon"></SideCategory>
        {dentistLinks.map((singleLink) => {
          return (
            <SideLink key={singleLink.id} singleLink={singleLink}></SideLink>
          );
        })}
        <SideCategory category="Statistics" icon="Icon"></SideCategory>
        {dataLinks.map((singleLink) => {
          return (
            <SideLink key={singleLink.id} singleLink={singleLink}></SideLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
