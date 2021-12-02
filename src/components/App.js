import React, { useState, useMemo, useEffect } from "react";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Dogs from "./pages/Dogs/Dogs";

export const Appcontext = React.createContext();

const App = ({ fadepreload, hidepreload }) => {
  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        fadepreload();
      }, 1000);
    };
    setTimeout(() => {
      hidepreload();
    }, 1300);
  }, []);
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
    <BrowserRouter>
      <Appcontext.Provider value={State}>
        <Cursor Pointer={Pointer} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dogs" element={<Dogs />} />
        </Routes>
      </Appcontext.Provider>
    </BrowserRouter>
  );
};

export default App;
