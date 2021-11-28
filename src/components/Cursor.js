import React, { useRef, useEffect, useState, useContext } from "react";
import { Appcontext } from "./App";

const Cursor = () => {
  const CurserRef = useRef(null);
  const CurserPosition = (e) => {
    const X = e.clientX - CurserRef.current.clientWidth / 2;
    const Y = e.clientY - CurserRef.current.clientHeight / 2;
    CurserRef.current.style.top = `${Y}px`;
    CurserRef.current.style.left = `${X}px`;
  };
  useEffect(() => {
    document.addEventListener("mousemove", CurserPosition);
    return () => {
      document.removeEventListener("mousemove", CurserPosition);
    };
  }, []);
  const [Pointer] = useContext(Appcontext);
  return (
    <div
      ref={CurserRef}
      className={Pointer ? "cursor pointer" : "cursor"}
    ></div>
  );
};

export default Cursor;
