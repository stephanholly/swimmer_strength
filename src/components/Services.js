import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Services extends Component {
  render() {
    return (
      <div class="container">
        <div className="page-header">
          <h1 className="page-header-text">Services</h1>
        </div>

        <div class="services-training-1 top-section">
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
                      <a href="http://obscure-anchorage-69628.herokuapp.com/aztraining-mesa" className="training-link-text">Train at our Mesa Location</a>
                    </div>
                    <div className="az-training-button">
                      <a href="http://obscure-anchorage-69628.herokuapp.com/aztraining-tempe" className="training-link-text">Train at our Tempe Location</a>
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
            <div className="training-other">
                <h1 className="training-header-sub">Online-based Training</h1>
                  <div className="ul-training1">
                    <p className="training-text-first">Same philosophy as the Arizona-based Training +:</p>
                    <ul>
                      <li className="training-text2">Monthly face-to-face follow ups</li>
                      <li className="training-text2">Workouts via TrainHeroic app; Exercise videos, repetitions, and sets perscribed to your individual needs.</li>
                      <li className="training-text2">Monthly tasks to focus on phyisically and mentally</li>
                    </ul>
                    <div className="az-training-button2">
                    <a href="http://obscure-anchorage-69628.herokuapp.com/onlinetraining" className="training-link-text2">sign up here</a>
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
                    <li className="training-text3">Intro to Olympic lifting</li>
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
                    <Link to="/campquestionnaire" className="training-link-text2">sign up here</Link>
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
          <div className="training-descriptions">
            <div className="training-pic-sub3"></div>
            <div className="training-other">
              <h1 className="training-header-sub">Have Coach Deniz come to your<br/>team for a workshop!</h1>
                <div className="ul-training1">
                <p className="training-text-first">Workshops are hands-on technical workouts including:</p>
                <div className="ul-camps2">
                <ul className="ul-camp-width">
                  <li className="training-text3">Strength and Dryland</li>
                  <li className="training-text3">Improving Starts</li>
                  <li className="training-text3">Basic mobility</li>
                </ul>
                <ul className="ul-camp-width">
                  <li className="training-text3">Defining core muscles</li>
                  <li className="training-text3">Squat and jump technique</li>
                  <li className="training-text3">Shoulder blade use</li>
                </ul>
                </div>
                <div className="az-training-button2">
                  <Link to="/workshopquestionnaire" className="training-link-text2">sign up here</Link>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div class="services-training-5">
          <h1 className="title">Consulting</h1>
          <div class="img__description_layer">
            <div className="training-descriptions">
              <div className="training-camp">
                <h1 className="training-header-sub">Get insight on how to improve <br/> your program with Coach Deniz!</h1>
                <div className="ul-training1">
                  <p className="training-text-first">Consulting include:</p>
                  <div className="ul-camps2">
                  <ul className="ul-camp-width2">
                    <li className="training-text3">Debunk your main issues and concerns regarding swimming related strength and dryland training</li>
                    <li className="training-text3">Get insights on how to best utilize dryland training</li>
                    <li className="training-text3">Get recommended exercise lists specific to your needs</li>
                  </ul>
                  </div>
                  <div className="az-training-button2">
                    <a href="http://obscure-anchorage-69628.herokuapp.com/onlinetraining" className="training-link-text2">sign up here</a>
                  </div>
                </div>
              </div>
            <div className="training-pic-cons"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
