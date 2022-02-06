import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalRouter from "components/global-router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalRouter />
    </BrowserRouter>
  );
};

export default App;
