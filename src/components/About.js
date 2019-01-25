import React, { Component } from 'react';
import Slider from "react-slick";

class About extends Component {
  render() {
    var settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     arrows: true,
     autoplay: true,
     autoplaySpeed: 5000,
   };
    return (
      <div className="container">
        <div className="page-header">
          <h1 className="page-header-text">About</h1>
        </div>
        <div className="video-title">
          <video className="main-video" loop autoPlay>
              <source src='video1.mp4' type="video/mp4" />
          </video>
        </div>
        <div className="home-about">
          <div className="home-about-pic">
            <img className="home-pic" src="/images/Shrek.jpg"/>
          </div>
          <div className="home-about-bio">
            <h1>Deniz Hekmati</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="home-header">
          <h1>Testimonials</h1>
        </div>
        <div className="slider-container">
        <Slider {...settings}>
         <div className="ind-slider">
           <h3>tesimonial 1</h3>
         </div>
         <div className="ind-slider">
           <h3>tesimonial 2</h3>
         </div>
         <div className="ind-slider">
           <h3>tesimonial 3</h3>
         </div>
         <div className="ind-slider">
           <h3>tesimonial 4</h3>
         </div>
         <div className="ind-slider">
           <h3>tesimonial 5</h3>
         </div>
         <div className="ind-slider">
           <h3>tesimonial 6</h3>
         </div>
       </Slider>
      </div>
      <div className="home-header">
        <h1>Contact</h1>
      </div>
      </div>
    );
  }
}

export default About;
