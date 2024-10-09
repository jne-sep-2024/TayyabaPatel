import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./Components/Store";
import CakeShop from "./Components/CakeShop";
import IceCreamShop from "./Components/IceCreamShop";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>cake shop</h1>
        <CakeShop />
        <hr />
        <h1>ice cream shop</h1>
        <IceCreamShop />
      </Provider>
    </>
  );
}

export default App;
