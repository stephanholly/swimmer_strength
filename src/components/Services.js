import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <div class="container">
        <div className="page-header">
          <h1 className="page-header-text">Services</h1>
        </div>
        <div class="services-training">
          <h1 className="title">Strength Training</h1>
          <div class="img__description_layer">
            <div className="training-descriptions">
              <div className="training">
                <h1 className="training-header">Arizona-based Training</h1>
                <div className="ul-training1">
                <ul>
                  <li className="training-text">Consistent sports science testing:</li>
                  <ul>
                    <li className="training-text">individual athletic blueprint; upper and lower power, strength, core endurance, and functional movement.</li>
                  </ul>
                  <li className="training-text">Become and athlete; strong, powerful, durable, explosive, flexible, mobile, and supple.</li>
                  <li className="training-text">Holistic training approach;</li>
                    <ul>
                      <li className="training-text">Introducing the importance of integration among dryland, diet, sleep, imagery, optimism, willingness, technical perfection, and mindfulness.</li>
                    </ul>
                </ul>
                <div className="az-training-button">
                  <a className="training-link-text" href="http://www.google.com">sign up here</a>
                </div>
                </div>
            </div>
            <div className="training-pic"></div>
            </div>
            <div className="training-descriptions">
            <div className="training-pic2"></div>
            <div className="training3">
                <h1 className="training-header">Online-based Training</h1>
                  <div className="ul-training2">
                    <p className="training-text-first">Same philosophy as the Arizona-based Training +:</p>
                    <ul>
                      <li className="training-text">Monthly face-to-face follow ups</li>
                      <li className="training-text">Workouts received via TrainHeroic app; Exercise videos, repetitions, and sets perscribed to your individual needs.</li>
                      <li className="training-text">Receiving monthly tasks to focus on phyisically and mentally</li>
                    </ul>
                    <div className="az-training-button2">
                      <a className="training-link-text" href="http://www.google.com">sign up here</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="services-camps">
          <h1 className="title">Camps</h1>
          <div class="img__description_layer">
            <h1 className="title2">Camps</h1>
            <div className="training-descriptions">
              <a className="camps" href="https://www.google.com">
              <div>
                <h1 className="training-header">Fundamentals to strength training for swimming</h1>
                <div className="ul-camps1">
                <ul>
                  <li className="training-text">Introduction to Olympic lifting</li>
                  <li className="training-text">Core Training</li>
                </ul>
                <ul>
                  <li className="training-text">Injury prevention</li>
                  <li className="training-text">Multidirection</li>
                </ul>
                </div>
                <h1 className="training-header">High-performance topics covered:</h1>
                <div className="ul-camps1">
                  <ul>
                    <li className="training-text">Recovery</li>
                    <li className="training-text">Sports Sychology</li>
                  </ul>
                  <ul>
                    <li className="training-text">Muscle physiology</li>
                  </ul>
                </div>
              </div>
            </a>
            </div>
          </div>
        </div>
        <div class="products-gear">
          <h1 className="title">Consulting</h1>
          <div class="img__description_layer">
            <h1 className="title2-comingsoon">Consulting</h1>
            <p className="title3">COMING SOON</p>
          </div>
        </div>
        <div class="products-gear">
          <h1 className="title">Workshops</h1>
          <div class="img__description_layer">
            <h1 className="title2-comingsoon">Workshops</h1>
            <p className="title3">COMING SOON</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
