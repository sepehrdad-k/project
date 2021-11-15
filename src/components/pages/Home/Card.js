import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h1 className="card-title">{props.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          doloremque enim dolorem neque nam recusandae ullam libero officiis
          consequatur eos ipsam totam voluptates, ut vel provident ipsum optio
          laboriosam ipsa! Quo ipsam non veritatis sed dolorem error
          dignissimos, in numquam.
        </p>
        <button type="button">Purchase</button>
      </div>
    </div>
  );
};

export default Card;
