import React, { Component } from 'react';
import {Link} from 'react-router-dom'

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
            <h1 className="title2">Strength Training</h1>
            <div className="training-descriptions">
              <a className="training" href="https://www.google.com">
              <div>
                <h1 className="training-header">Arizona-based Training</h1>
                <div className="ul-training1">
                <ul>
                  <li className="training-text">Consistent sports science testing:</li>
                  <ul>
                    <li className="training-text">individual athletic blueprint; uppper and lower power, strength, core endurance, and functional movement.</li>
                  </ul>
                  <li className="training-text">Become and athlete; strong, powerful, durable, explosive, flexible, mobile, and supple.</li>
                  <li className="training-text">Holistic training approach;</li>
                    <ul>
                      <li className="training-text">Introducing the importance of integration among dryland, diet, sleep, imagery, optimism, willingness, technical perfection, and mindfulness.</li>
                    </ul>
                </ul>
                </div>
              </div>
            </a>
            <a className="training" href="https://www.yahoo.com">
            <div>
                <h1 className="training-header">Online-based Training</h1>
                  <div className="ul-training2">
                    <p className="training-text-first">Same philosophy as the Arizona-based Training +:</p>
                    <ul>
                      <li className="training-text">Monthly face-to-face follow ups</li>
                      <li className="training-text">Workouts received via TrainHeroic app; Exercise videos, repetitions, and sets perscribed to your individual needs.</li>
                      <li className="training-text">Receiving monthly tasks to focus on phyisically and mentally</li>
                    </ul>
                </div>
              </div>
            </a>
            </div>
          </div>
        </div>
        <div class="services-camps">
          <h1 className="title">Camps</h1>
          <div class="img__description_layer">
            <h1 className="title2-camps">Camps</h1>
              <Link className="camps" to="/products">
                <div>
                  <h4 className="camp-header">Fundamentals to strength training for swimming</h4>
                    <div className="ul-training">
                    <ul>
                      <li className="camp-text">Introduction to Olympic lifting</li>
                      <li className="camp-text">Core training</li>
                      <li className="camp-text">Injury prevention</li>
                      <li className="camp-text">Multidirection</li>
                    </ul>
                  </div>
                </div>
=                <div>
                  <h4 className="camp-header">High-performance topics covered:</h4>
                    <div className="ul-training">
                    <ul>
                      <li className="camp-text">Recovery</li>
                      <li className="camp-text">Sport Sychology</li>
                      <li className="camp-text">Muscle physiology</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
        </div>
        <div class="services-consulting">
          <h1 className="title">Consulting</h1>
          <div class="img__description_layer">
            <h1 className="title2">Consulting</h1>
            <p className="img__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>
        </div>
        <div class="services-workshops">
          <h1 className="title">Workshops</h1>
          <div class="img__description_layer">
            <h1 className="title2">Workshops</h1>
            <p className="img__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
