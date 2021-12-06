import React, { useState, useEffect, useContext } from "react";
import { Appcontext } from "../../App";
const Selector = React.memo(() => {
  const { setPointer } = useContext(Appcontext);
  const { setValue } = useContext(Appcontext);
  const [Data, setData] = useState(["Loading..."]);
  const abortGetData = new AbortController();
  const abortSignal = abortGetData.signal;
  const getdata = async (abortSignal) => {
    const data = await fetch("https://dog.ceo/api/breeds/list/all", {
      signal: abortSignal,
    });
    const result = await data.json();
    const list = await Object.keys(result.message);

    setData(list);
  };
  useEffect(() => {
    getdata(abortSignal);
    return () => {
      abortGetData.abort();
    };
  }, []);
  const [Menue, setMenue] = useState(false);
  const [Selected, setSelected] = useState("Choose Breed");
  const selection = (input) => {
    setMenue(false);
    setSelected(input);
    setValue(input);
  };
  return (
    <div
      onMouseEnter={() => setPointer(true)}
      onMouseLeave={() => setPointer(false)}
      className="menue"
    >
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
});

export default Selector;
