import React, { useContext, useEffect, useState } from "react";
import Selector from "./Selector";
import { Appcontext } from "../../App";
import { LazyLoadImage } from "react-lazy-load-image-component";
import uuid from "react-uuid";
import "react-lazy-load-image-component/src/effects/blur.css";
import "regenerator-runtime/runtime";
const Dogs = React.memo(() => {
  const { Value } = useContext(Appcontext);
  const [List, setList] = useState([]);
  const url = `https://dog.ceo/api/breed/${Value}/images`;
  const getimg = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    setList(result.message);
  };
  useEffect(() => {
    console.log("getimg");
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
                <div key={uuid()} className="dogapp-img">
                  <LazyLoadImage
                    className="img"
                    width="100%"
                    height="100%"
                    effect="blur"
                    src={img}
                    alt="dog"
                  />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
});

export default Dogs;
