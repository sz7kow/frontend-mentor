import React from "react";
import ReactDOM from "react-dom/client";

import { reportWebVitals } from "utils/report-web-vitals";
import { Application } from "./components/application";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

reportWebVitals();
