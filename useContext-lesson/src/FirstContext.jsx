/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from "react";
import { useState } from "react";

export const FirstContext = createContext(null);

const FirstContextProvider = (props) => {
  const [username, setUsername] = useState("Myint Myat");
  const address = "YGN";
  return (
    <FirstContext.Provider value={{ username, address }}>
      {props.children}
    </FirstContext.Provider>
  );
};

export default FirstContextProvider;
