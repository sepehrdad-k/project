import React, { useContext, useEffect, useState } from "react";
import Selector from "./Selector";
import { Appcontext } from "../../App";
import "regenerator-runtime/runtime";
const Dogs = () => {
  const { Value } = useContext(Appcontext);
  const [List, setList] = useState([]);
  const url = `https://dog.ceo/api/breed/${Value}/images`;
  const getimg = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    setList(result.message);
  };
  useEffect(() => {
    getimg(url);
  }, [url]);

  return (
    <>
      <main className="dogs">
        <section className="dogapp">
          <div className="dogapp-title">
            <h3>
              here you can see a bunch of picturs from a certain dog breed!
            </h3>
          </div>
          <div className="dogapp-select">
            <Selector />
          </div>
          <div className="dogapp-content">
            {List.map((img) => {
              return (
                <div className="dogapp-img">
                  <img src={img}></img>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Dogs;
