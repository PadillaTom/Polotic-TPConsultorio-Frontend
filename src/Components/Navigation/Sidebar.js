import React from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaUsers, FaUserMd, FaHome, FaChartBar } from "react-icons/fa";

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
  const { username, email, imageUrl } = mockUser;

  return (
    <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-top">
        <div className="sb-top-logo-close">
          <div className="sb-top-logo">Consultorio</div>
          <FaTimes onClick={closeSidebar} className="sb-top-close"></FaTimes>
        </div>

        <div className="sb-top-account">
          <div className="acc-img">{imageUrl}</div>
          <div className="acc-info">
            <h3>{username}</h3>
            <p>{email}</p>
          </div>
        </div>
      </div>

      <div className="sb-line"></div>

      <div className="sidebar-links">
        <Link to="/">
          <SideCategory
            category="Dashboard"
            icon={<FaHome></FaHome>}
            id={1}
          ></SideCategory>
        </Link>

        {/* Patients */}
        <div className="sb-single-dropdown">
          <SideCategory
            category="Patient"
            icon={<FaUsers></FaUsers>}
            id={2}
          ></SideCategory>
          <ul>
            {patientLinks.map((singleLink) => {
              return (
                <li key={singleLink.id}>
                  <SideLink singleLink={singleLink}></SideLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Dentists */}
        <div className="sb-single-dropdown">
          <SideCategory
            category="Dentist"
            icon={<FaUserMd></FaUserMd>}
            id={3}
          ></SideCategory>
          <ul>
            {dentistLinks.map((singleLink) => {
              return (
                <li key={singleLink.id}>
                  <SideLink singleLink={singleLink}></SideLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Statistics */}
        <div className="sb-single-dropdown">
          <SideCategory
            category="Statistics"
            icon={<FaChartBar></FaChartBar>}
            id={4}
          ></SideCategory>
          <ul>
            {dataLinks.map((singleLink, index) => {
              return (
                <li key={singleLink.id}>
                  <SideLink singleLink={singleLink}></SideLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
