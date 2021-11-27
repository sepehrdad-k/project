import React, { useRef, useEffect } from "react";

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

  return <div ref={CurserRef} className="cursor"></div>;
};

export default Cursor;
