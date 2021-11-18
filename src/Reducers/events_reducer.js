import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../Actions/actions";

const events_reducer = (state, action) => {
  // *** Toggle Sidebar ***
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  // *** Collect Person Fields ***

  throw new Error(`No Matchinv "${action.type}" - Action Type`);
};

export default events_reducer;
