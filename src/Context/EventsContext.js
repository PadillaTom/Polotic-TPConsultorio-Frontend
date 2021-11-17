import React, { createContext, useReducer, useContext } from "react";

import reducer from "../Reducers/events_reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../Actions/actions";

// Initial State:
const initialState = {
  isSidebarOpen: false,
  personData: {},
};

const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // *** Toggle Sidebar ***
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // ***  MAIN  ***
  return (
    <EventsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEventsContext = () => {
  return useContext(EventsContext);
};
