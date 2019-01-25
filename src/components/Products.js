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
              <p className="img__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>
        </div>
        <div class="products-programs">
          <h1 className="title-strength">Downloadable Programs</h1>
          <div class="img__description_layer">
              <p className="img__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
