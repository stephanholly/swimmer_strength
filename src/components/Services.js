import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Services extends Component {
  render() {
    return (
      <div class="container">
        <div className="page-header">
          <h1 className="page-header-text">Services</h1>
        </div>
        <div class="services-training-1">
          <h1 className="title">Arizona Strength Training</h1>
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
                    <li className="training-text">Become an athlete; strong, powerful, durable, explosive, flexible, mobile, and supple.</li>
                    <li className="training-text">Holistic training approach;</li>
                      <ul>
                        <li className="training-text">Introducing the importance of integration among dryland, diet, sleep, imagery, optimism, willingness, technical perfection, and mindfulness.</li>
                      </ul>
                  </ul>
                  <div className="az-training-button">
                    <Link to="/aztraining" className="training-link-text">sign up here</Link>
                  </div>
                </div>
              </div>
            <div className="training-pic"></div>
            </div>
          </div>
        </div>

        <div class="services-training-2">
          <h1 className="title">Online Strength Training</h1>
          <div class="img__description_layer">
            <div className="training-descriptions">
              <div className="training-pic-sub"></div>
            <div className="training">
                <h1 className="training-header">Online-based Training</h1>
                  <div className="ul-training1">
                    <p className="training-text-first">Same philosophy as the Arizona-based Training +:</p>
                    <ul>
                      <li className="training-text">Monthly face-to-face follow ups</li>
                      <li className="training-text">Workouts received via TrainHeroic app; Exercise videos, repetitions, and sets perscribed to your individual needs.</li>
                      <li className="training-text">Receiving monthly tasks to focus on phyisically and mentally</li>
                    </ul>
                    <div className="az-training-button2">
                    <Link to="/onlinetraining" className="training-link-text">sign up here</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="services-training-3">
          <h1 className="title">Camps</h1>
          <div class="img__description_layer">
            <div className="training-descriptions">
              <div className="training">
                <h1 className="training-header-camps">Camps</h1>
                <div className="ul-training1">
                  <p className="training-text-first">Fundamentals to strength training for swimming</p>
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
                  <p className="training-text-first">High-performance topics covered:</p>
                  <div className="ul-camps1">
                    <ul>
                      <li className="training-text">Recovery</li>
                      <li className="training-text">Sports Sychology</li>
                    </ul>
                    <ul>
                      <li className="training-text">Muscle physiology</li>
                    </ul>
                  </div>
                  <div className="az-training-button">
                    <Link to="/aztraining" className="training-link-text">sign up here</Link>
                  </div>
                </div>
              </div>
            <div className="training-pic-sub"></div>
            </div>
          </div>
        </div>

        <div class="services-training-4">
          <h1 className="title">Workshops</h1>
          <div class="img__description_layer">
            <p className="title3">COMING SOON</p>
          </div>
        </div>

        <div class="services-training-5">
          <h1 className="title">Consulting</h1>
          <div class="img__description_layer">
            <p className="title3">COMING SOON</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
