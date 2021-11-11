import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";

import { App } from "./Components/App";

import { EventsProvider } from "./Context/EventsContext";

ReactDOM.render(
  <EventsProvider>
    <App />
  </EventsProvider>,
  document.getElementById("root")
);
