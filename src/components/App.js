import React, { useState, useMemo, useEffect } from "react";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Dogs from "./pages/Dogs/Dogs";
import Preload from "./Preload";

export const Appcontext = React.createContext();

const App = () => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    window.onload = () => {
      console.log("loaded");
      setisLoading(false);
    };
  }, [isLoading]);
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
        <Preload preloadmode={isLoading} />
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
