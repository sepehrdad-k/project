import React, { useContext } from "react";
import Card from "./Card";
import { Appcontext } from "../../App";
const Home = React.memo(() => {
  const Products = ["Product1", "Product2", "Product3", "Product4"];
  const { setPointer } = useContext(Appcontext);
  return (
    <main>
      <section className="section1">
        <div className="title">
          <h1>
            This Is
            <br />
            My <span>Website</span>
          </h1>
          <h3>here is a random button for no reason!</h3>
          <button
            onMouseEnter={() => setPointer(true)}
            onMouseLeave={() => setPointer(false)}
            type="button"
          >
            Button
          </button>
        </div>
      </section>
      <section className="section2">
        <h2>Products</h2>
        <div className="cont">
          {Products.map((item) => (
            <Card key={item} name={item} />
          ))}
        </div>
      </section>
    </main>
  );
});

export default Home;
