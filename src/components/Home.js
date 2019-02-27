import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'


class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="video-title">
        <div className="main-video">
        <ReactPlayer className="player" url="https://player.vimeo.com/video/319634508" width='100%' height='100%' playing loop/>
        </div>
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
            <div className="description-icon">
              <i class="fas fa-swimmer centered-icon"></i>
              <p>We embody high-performance training for the swimming community, striving to leave a positive impact with faster swimming and reduced injuries.</p>
            </div>
            <div className="description-icon">
              <i class="fas fa-flask"></i>
              <p>We use sport science data that is peer-reviewed to ensure effective and efficient results in our swimmers that aim to prevent injury.</p>
            </div>
            <div className="description-icon-strength">
              <i class="fas fa-dumbbell"></i>
              <p>Your reliable and entertaining source of strength training for competitive swimmers.</p>
            </div>
            <div className="description-icon">
              <i class="fas fa-running centered-icon"></i>
              <p>With patience & passion, we document our progress to provide quality content with context to give exceptional value for our Swimmer Strength community.</p>
            </div>
          </div>
        </div>
        <div className="register-link">
          <Link to="/registration"><h1 className="register-link-text">Start Training Today!</h1></Link>
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
            <div className='pic-dev'>
              <img className="actual" src='https://i.imgur.com/t4Rze73.png' alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
