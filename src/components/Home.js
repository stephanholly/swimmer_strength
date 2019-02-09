import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="video-title">
          <video className="main-video" loop autoPlay>
              <source src='video1.mp4' type="video/mp4" />
          </video>
          <div className="overlay">
            <h1 className="big">Swimmer Strength</h1>
            <p className="small">strength training that gets you faster<br/>& reduces risk of injury</p>
          </div>
        </div>
        <div className="who-we-are">
          <div className="home-header">
            <h1>Who We Are</h1>
          </div>
          <div className="who-we-are-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <div className="register-link">
          <Link to="/services"><h1 className="register-link-text">Start Training Today!</h1></Link>
        </div>
        <div className="affiliates">
          <div className="home-header">
            <h1>Trusted Affiliates</h1>
          </div>
          <div className="affiliate-pics">
            <div className='pic'>
              <img className="actual" src='https://i.imgur.com/zVDHTOz.png' alt="logo"/>
            </div>
            <div className='pic'>
              <img className="actual1" src='https://i.imgur.com/gCsXJ9a.png' alt="logo"/>
            </div>
            <div className='pic'>
              <img className="actual" src='https://i.imgur.com/CmzzzCe.png' alt="logo"/>
            </div>
            <div className='pic'>
              <img className="actual" src='https://i.imgur.com/zVDHTOz.png' alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
