import React, { useState, useEffect } from "react";

const Selector = (props) => {
  const [Data, setData] = useState(["options"]);
  const getdata = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/list/all");
    const result = await data.json();
    const list = await Object.keys(result.message);

    setData(list);
  };
  useEffect(() => {
    getdata();
  }, []);
  const [Menue, setMenue] = useState(false);
  const [Selected, setSelected] = useState("Choose Breed");
  const changevalue = props.changevalue;
  const selection = (input) => {
    setMenue(false);
    setSelected(input);
    changevalue(input);
  };
  return (
    <div className="menue">
      <div
        onClick={() => setMenue(!Menue)}
        className={Menue ? "menue-selected menue-open" : "menue-selected"}
      >
        {Selected}
      </div>
      <div className={Menue ? "menue-box menue-active" : "menue-box"}>
        {Data.map((item) => {
          return (
            <div
              onClick={() => selection(item)}
              key={item}
              className="menue-option"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Selector;
