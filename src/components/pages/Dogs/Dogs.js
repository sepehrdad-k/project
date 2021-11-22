import React from "react";
import "regenerator-runtime/runtime";

const Dogs = () => {
  const getdata = async () => {
    const data = await fetch("http://numbersapi.com/42");
    const result = await data.json();
    console.log(result);
  };
  getdata();
  return (
    <div>
      <h1>Helllo From Dogs</h1>
    </div>
  );
};

export default Dogs;
