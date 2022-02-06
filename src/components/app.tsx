import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalRouter from "components/global-router";
import GlobalStyle from "components/global-style";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalRouter />
    </BrowserRouter>
  );
};

export default App;
