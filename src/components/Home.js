import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="video-title">
          <video className="main-video" loop autoPlay>
              <source src='video1.mp4' type="video/mp4" />
          </video>
          <div className="overlay">
            <h1>Swimmer Strength</h1>
          </div>
        </div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
