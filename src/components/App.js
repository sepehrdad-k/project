import React, { useState, useEffect, useMemo } from "react";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Dogs from "./pages/Dogs/Dogs";

export const Appcontext = React.createContext();
export const Cursorcontext = React.createContext();

const App = () => {
  const [Pointer, setPointer] = useState(false);
  const [Value, setValue] = useState("akita");
  const State = useMemo(
    () => ({
      setPointer,
      Value,
      setValue,
    }),
    [Value]
  );
  return (
    <Appcontext.Provider value={State}>
      <Cursorcontext.Provider value={{ Pointer }}>
        <Cursor />
      </Cursorcontext.Provider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </Appcontext.Provider>
  );
};

export default App;
