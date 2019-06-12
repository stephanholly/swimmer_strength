import React, { Component } from 'react';


class Products extends Component {
  render() {
    return (
      <div className="container">
        <div class="services-training-4 top-section">
          <h1 className="title">SS Gear</h1>
          <div class="img__description_layer">
            <a href="http://www.swimmerstrength-shop.com" target="_blank">
              <p className="title-coming-soon card">CLICK HERE TO <br/>SHOP NOW</p>
            </a>
          </div>
        </div>
        <div class="services-training-5">
          <h1 className="title">Downloadable Studies</h1>
          <div class="img__description_layer">
          <div className="training-descriptions card">
            <div className="training-pic-sub1"></div>
          <div className="training-other">
              <h1 className="training-header-sub">Downloadable Studies</h1>
                <div className="ul-training1">
                  <p className="training-text-first">Our training is backed by science! Read our scientific programs by Swimmer Strength's own founders!</p>
                  <p className="download-text">The Effect of a 12-week Calisthenic Dryland Program on Functional Movement Screen and Pain Scores for Young Swimmers by Deniz Hekmati</p>
                  <div className="download-training-button">
                    <a href="/hekmati-ms-project.pdf" className="download-link-text" download>Download here</a>
                  </div>
                  <p className="download-text">The	Correlation Between	Strength	and	Power	Measures with	Sprint Freestyle Performance in	Division 1 Collegiate	Swimmers by Sean H. Kao, et al.</p>
                  <div className="download-training-button">
                    <a href="/jsr-kao.pdf" className="download-link-text" download>Download here</a>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
