import React from "react";
import Productitem from "./Productitem";

export default function Productlist(props) {
  const { products, onSelect, onBuy } = props;

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div className="col-sm-4 p-3">
            <Productitem product={product} onSelect={onSelect} onBuy={onBuy}/>
          </div>
        );
      })}
    </div>
  );
}
