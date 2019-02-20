import React, { Component } from 'react';


class Products extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1 className="page-header-text">Products</h1>
        </div>
        <div class="products-gear">
          <h1 className="title">SS Gear</h1>
          <div class="img__description_layer">
            <h1 className="title2-comingsoon">SS Gear</h1>
            <p className="title3">COMING SOON</p>
          </div>
        </div>
        <div class="products-gear">
          <h1 className="title">Downloadable Programs</h1>
          <div class="img__description_layer">
            <h1 className="title2-comingsoon">Downloadable Programs</h1>
            <p className="title3">COMING SOON</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
