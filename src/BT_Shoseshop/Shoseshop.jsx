import React, { Component } from "react";
import data from "./data.json";
import Modal from "./Modal";
import Productcart from "./Productcart";
import Productlist from "./Productlist";

export default class Shoseshop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
      carts: [],
    };
  }

  showProduct = (product) => {
    console.log(product);
    this.setState({ selectedProduct: product });
  };

  handleBuyProduct = (product) => {
      const index = this.state.carts.findIndex((item) => item.id === product.id);
      if(index === -1) {
          this.setState((state) => ({
            carts: [...state.carts, { ...product, soLuong: 1 }],
          }));
      } else {
          const carts = [...this.state.carts];
          carts[index].soLuong += 1;
          this.setState({ carts });
      }
  };

  handleDeleteproduct = (productId) => {
    const carts = this.state.carts.filter((item) => item.id !== productId);
    this.setState({ carts });
  }

  render() {
    return (
      <div className="container">
        <h1>Shose Shop</h1>
        <button
          data-toggle="modal"
          data-target="#product-carts"
          style={{
            position: "fixed",
            width: "50px",
            display: "block",
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            height: "45px",
            color: "red",
            border: "1px solid",
          }}
        >
          <i class="fa-solid fa-cart-plus"></i>
        </button>
        <Productlist products={data} onSelect={this.showProduct} onBuy={this.handleBuyProduct} />
        <Modal product={this.state.selectedProduct} />
        <Productcart cart={this.state.carts} onDelete={this.handleDeleteproduct} />
      </div>
    );
  }
}
