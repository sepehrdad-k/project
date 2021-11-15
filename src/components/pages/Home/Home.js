import React from "react";
import Card from "./Card";

const Home = () => {
  const Products = ["Product1", "Product2", "Product3", "Product4"];
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
          <button type="button">Button</button>
        </div>
      </section>
      <section className="section2">
        <h2>Products</h2>
        <div className="cont">
          {Products.map((item) => (
            <Card name={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
