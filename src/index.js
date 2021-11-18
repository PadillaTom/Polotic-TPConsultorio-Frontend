import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";

import { App } from "./Components/App";

import { EventsProvider } from "./Context/EventsContext";
import { GetDataProvider } from "./Context/GetDataContext";

ReactDOM.render(
  <GetDataProvider>
    <EventsProvider>
      <App />
    </EventsProvider>
  </GetDataProvider>,
  document.getElementById("root")
);
