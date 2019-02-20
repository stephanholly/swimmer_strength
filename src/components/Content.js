import React, { Component } from 'react';


class Content extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1 className="page-header-text">Content</h1>
        </div>
        <div class="products-gear">
          <h1 className="title">Videos</h1>
          <div class="img__description_layer">
            <h1 className="title2-comingsoon">Videos</h1>
            <p className="title3">COMING SOON</p>
          </div>
        </div>
        <div class="products-gear">
          <h1 className="title">Blog</h1>
          <div class="img__description_layer">
            <h1 className="title2-comingsoon">Blog</h1>
            <p className="title3">COMING SOON</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
