import React, { useContext, useEffect, useState } from "react";
import Selector from "./Selector";
import { Appcontext } from "../../App";
import "regenerator-runtime/runtime";
const Dogs = () => {
  const { Value } = useContext(Appcontext);

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
          <div className="dogapp-content">{Value}</div>
        </section>
      </main>
    </>
  );
};

export default Dogs;
