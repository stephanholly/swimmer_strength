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
                    <li className="training-text">Consistent sport science testing</li>
                    <li className="training-text">Become a strong, powerful, durable, explosive, flexible and mobile athlete.</li>
                    <li className="training-text">Holistic training approach</li>
                  </ul>
                  <div className="training-descriptions">
                    <div className="az-training-button">
                      <a href="http://www.localhost:3000/aztraining-mesa" className="training-link-text">Train at our Mesa Location</a>
                    </div>
                    <div className="az-training-button">
                      <a href="http://www.localhost:3000/aztraining-tempe" className="training-link-text">Train at our Tempe Location</a>
                    </div>
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
              <div className="training-pic-sub1"></div>
            <div className="training">
                <h1 className="training-header-sub">Online-based Training</h1>
                  <div className="ul-training1">
                    <p className="training-text-first">Same philosophy as the Arizona-based Training +:</p>
                    <ul>
                      <li className="training-text2">Monthly face-to-face follow ups</li>
                      <li className="training-text2">Workouts via TrainHeroic app; Exercise videos, repetitions, and sets perscribed to your individual needs.</li>
                      <li className="training-text2">Monthly tasks to focus on phyisically and mentally</li>
                    </ul>
                    <div className="az-training-button2">
                    <a href="http://www.localhost:3000/onlinetraining" className="training-link-text2">sign up here</a>
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
              <div className="training-camp">
                <h1 className="training-header-sub">Put on a camp<br/> with Coach Deniz and your team!</h1>
                <div className="ul-training1">
                  <p className="training-text-first">Camps include:</p>
                  <div className="ul-camps2">
                  <ul className="ul-camp-width">
                    <li className="training-text3">Fundamentals to strength training for swimming</li>
                    <li className="training-text3">Introduction to Olympic lifting</li>
                    <li className="training-text3">Core Training</li>
                  </ul>
                  <ul className="ul-camp-width">
                    <li className="training-text3">Injury prevention</li>
                    <li className="training-text3">Proper Recovery</li>
                    <li className="training-text3">Sports Sychology</li>
                    <li className="training-text3">Muscle physiology</li>

                  </ul>
                  </div>
                  <div className="az-training-button2">
                    <Link to="/aztraining" className="training-link-text2">sign up here</Link>
                  </div>
                </div>
              </div>
            <div className="training-pic-sub2"></div>
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
