import React from "react";

export default function Productitem(props) {
  const { product, onSelect, onBuy } = props;

  return (
    <div className="card">
      <img style={{ witdh: "100%" }} src={product.image} alt={product.name} />
      <div className="card-body" style={{ textAlign: "left" }}>
        <h4>{product.name}</h4>
        <span>Price: {product.price}$</span> <br />
        <span>
          <button className="btn btn-dark" onClick={() => onBuy(product)}>
            add to cart{" "}
            <i style={{ fontSize: "13px" }} class="fa-solid fa-cart-plus"></i>
          </button>
          <button
            className="btn btn-success"
            style={{ marginLeft: "10px" }}
            data-toggle="modal"
            data-target="#product-select"
            onClick={() => onSelect(product)}
          >
            Information
            <i
              style={{ fontSize: "17px" }}
              class="fa-solid fa-magnifying-glass"
            ></i>
          </button>
        </span>
      </div>
    </div>
  );
}
