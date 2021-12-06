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
  const abortGetImg = new AbortController();
  const abortSignal = abortGetImg.signal;
  const getimg = async (url, abortSignal) => {
    const response = await fetch(url, { signal: abortSignal });
    const result = await response.json();
    setList(result.message);
  };
  useEffect(() => {
    getimg(url, abortSignal);
    return () => {
      abortGetImg.abort();
    };
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
