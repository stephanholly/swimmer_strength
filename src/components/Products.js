import React, { Component } from 'react';


class Products extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1 className="page-header-text">Products</h1>
        </div>
        <div class="services-training-4 top-section">
          <h1 className="title">SS Gear</h1>
          <div class="img__description_layer">
            <a href="https://squareup.com/store/swimmer-strength">
              <p className="title3">SHOP HERE</p>
            </a>
          </div>
        </div>
        <div class="services-training-5">
          <h1 className="title">Downloadable Programs</h1>
          <div class="img__description_layer">
            <p className="title-coming-soon">DOWNLOADABLE PROGRAMS COMING SOON</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
