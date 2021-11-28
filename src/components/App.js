import React, { useState } from "react";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Dogs from "./pages/Dogs/Dogs";

export const Appcontext = React.createContext();

const App = () => {
  const [Pointer, setPointer] = useState(false);
  return (
    <Appcontext.Provider value={[Pointer, setPointer]}>
      <Navbar />
      <Cursor />
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
