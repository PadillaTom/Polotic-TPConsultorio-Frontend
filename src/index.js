import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";

import { App } from "./Components/App";

import { EventsProvider } from "./Context/EventsContext";
import { GetDataProvider } from "./Context/GetDataContext";

ReactDOM.render(
  <EventsProvider>
    <GetDataProvider>
      <App />
    </GetDataProvider>
  </EventsProvider>,
  document.getElementById("root")
);
