import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'


class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="video-title">
        <div className="main-video">
        <ReactPlayer className="player" config={{ file: { attributes: {autoPlay: true, muted: true}}}} url="https://player.vimeo.com/video/319634508" width='100%' height='100%' playing loop/>
        </div>
          <div className="overlay">
            <h1 className="big">Swimmer Strength</h1>
            <p className="small">strength training that gets you faster & reduces risk of injury</p>
            <div className="register-link">
              <Link to="/start-training-today"><h1 className="register-link-text">Start Training Today!</h1></Link>
            </div>
          </div>
        </div>
        <div className="mobile-register-link">
          <Link to="/10DayFreeTrial"><h1 className="mobile-register-link-text">Click here to start training today!</h1></Link>
        </div>
        <div className="who-we-are">
          <div className="home-header">
            <h1>Who We Are</h1>
          </div>
          <div className="who-we-are-text">
            <div className="description-icon">
              <i class="fas fa-swimmer centered-icon"></i>
              <p>We embody high-performance training for the swimming community, striving to positively evolve the modern dryland environment.</p>
            </div>
            <div className="description-icon">
              <i class="fas fa-flask"></i>
              <p>We are data driven and use sport science to guide us with each athlete and team to ensure the best results and minimal risk of injuries.</p>
            </div>
            <div className="description-icon-strength">
              <i class="fas fa-dumbbell"></i>
              <p>We make swimmers holistically athletic; strength, power, range of motion, recovery, and the mental game.</p>
            </div>
            <div className="description-icon">
              <i class="fas fa-running centered-icon"></i>
              <p> We aim to bring our Swimmer Strength community nothing but the best to give you the most value.</p>
            </div>
          </div>
        </div>
        <Link to={{ pathname: '/tenDayFreeTrial' }}>
          <div className="home-signup">
            <h1 className="padding">Click here to get 10-Days free Online Training</h1>
          </div>
        </Link>
        <div className="affiliates">
          <div className="home-header">
            <h1>Trusted Affiliates</h1>
          </div>
          <div className="affiliate-pics">
            <div className='pic'>
            <a href="https://www.finisswim.com">
              <img className="actual" src='https://i.imgur.com/zVDHTOz.png' alt="logo"/>
            </a>
            </div>
            <div className='pic-boat'>
              <a href="https://www.voyagepro.co">
                <img className="actual1" src='https://i.imgur.com/wTld0ku.png?1' alt="logo"/>
              </a>
            </div>
            <div className='pic'>
              <a href="https://prlabpt.com">
                <img className="actual" src='https://i.imgur.com/CmzzzCe.png' alt="logo"/>
              </a>
            </div>
            <div className='pic-dev'>
              <a href="http://swimdevils.com">
                <img className="actual" src='https://i.imgur.com/t4Rze73.png' alt="logo"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
