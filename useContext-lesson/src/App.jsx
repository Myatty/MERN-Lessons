/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
import Child3 from "./Components/Child3";
import "./App.css";
import FirstContextProvider from "./FirstContext";

function App() {

  return (
    <>
      <section>
        <FirstContextProvider>
          <Child1 />
          <Child2 />
          <Child3 />
        </FirstContextProvider>
      </section>
    </>
  );
}

export default App;
