import React, { useRef, useEffect } from "react";

const Cursor = () => {
  const CurserRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const X = e.clientX - CurserRef.current.clientWidth / 2;
      const Y = e.clientY - CurserRef.current.clientHeight / 2;
      CurserRef.current.style.top = `${Y}px`;
      CurserRef.current.style.left = `${X}px`;
    });
  }, []);

  return (
    <div ref={CurserRef} className="cursor">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Cursor;
