import React from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import Products from "./components/Products/Products";

const App = function () {
  return (
    <React.Fragment>
      <MainHeader />
      <Products />
    </React.Fragment>
  );
};

export default App;
