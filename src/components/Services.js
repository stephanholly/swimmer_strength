import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Services extends Component {
  render() {
    return (
      <div class="container">
        <div class="services-training-1 top-section">
          <h1 className="title">Strength Training in Arizona</h1>
          <div class="img__description_layer">
            <div className="training-descriptions card">
              <div className="training">
                <h1 className="training-header">Get Coached in Arizona</h1>
                <div className="ul-training1">
                  <ul>
                    <li className="training-text">Well-rounded & holistic training methodology.</li>
                    <li className="training-text">Consistent sport science testing & analysis.</li>
                    <li className="training-text">Improving strength, power, mobility, and flexibility. </li>
                  </ul>
                  <div className="training-descriptions">
                    <div className="az-training-button">
                      <a href="http://www.swimmerstrength.com/aztraining-mesa" className="training-link-text">Train in Northeast Mesa</a>
                    </div>
                    <div className="az-training-button">
                      <a href="http://www.swimmerstrength.com/aztraining-tempe" className="training-link-text">Train in Southwest Mesa</a>
                    </div>
                  </div>
                </div>
              </div>
            <div className="training-pic"></div>
            </div>
          </div>
        </div>

        <div class="services-training-2">
          <h1 className="title">Strength Training Online</h1>
          <div class="img__description_layer">
            <div className="training-descriptions card">
              <div className="training-pic-sub1"></div>
            <div className="training-other">
                <h1 className="training-header-sub">Get Coached Online</h1>
                  <div className="ul-training1">
                    <p className="training-text-first">Same philosophy as the Arizona-based Training +:</p>
                    <ul>
                      <li className="training-text2">Monthly face-to-face follow ups</li>
                      <li className="training-text2">Workouts via TrainHeroic app; Exercise videos, repetitions, and sets perscribed to your individual needs.</li>
                      <li className="training-text2">Monthly tasks to focus on phyisically and mentally</li>
                    </ul>
                    <div className="az-training-button2">
                    <a href="http://www.swimmerstrength.com/onlinetraining" className="training-link-text2">start now</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="services-training-3">
          <h1 className="title">Training Camps</h1>
          <div class="img__description_layer">
            <div className="training-descriptions card">
              <div className="training-camp">
                <h1 className="training-header-sub">Request a Team Camp<br/> with Coach Deniz</h1>
                <div className="ul-training1">
                  <p className="training-text-first">Camps include:</p>
                  <div className="ul-camps2">
                  <ul className="ul-camp-width">
                    <li className="training-text3">Fundamentals to strength training for swimming</li>
                    <li className="training-text3">Intro to Olympic lifting</li>
                    <li className="training-text3">Core Training</li>
                  </ul>
                  <ul className="ul-camp-width">
                    <li className="training-text3">Injury Prevention: Shoulders, Knees & Back.</li>
                    <li className="training-text3">Proper Recovery</li>
                    <li className="training-text3">Physiology & Metabolism.</li>
                  </ul>
                  </div>
                  <div className="az-training-button2">
                    <Link to="/campquestionnaire" className="training-link-text2">request now</Link>
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
          <div className="training-descriptions card">
            <div className="training-pic-sub3"></div>
            <div className="training-other">
              <h1 className="training-header-sub">Have Coach Deniz come to <br/>your team for a workshop.</h1>
                <div className="ul-training1">
                <p className="training-text-first">Workshops are hands-on technical workouts including:</p>
                <div className="ul-camps2">
                <ul className="ul-camp-width">
                <li className="training-text3">Fundamentals to strength training for swimming</li>
                <li className="training-text3">Intro to Olympic lifting</li>
                <li className="training-text3">Core Training</li>
              </ul>
              <ul className="ul-camp-width">
                <li className="training-text3">Injury Prevention: Shoulders, Knees & Back.</li>
                <li className="training-text3">Proper Recovery</li>
                <li className="training-text3">Physiology & Metabolism.</li>
                </ul>
                </div>
                <div className="az-training-button2">
                  <Link to="/workshopquestionnaire" className="training-link-text2">request now</Link>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div class="services-training-5">
          <h1 className="title">Consulting</h1>
          <div class="img__description_layer">
            <div className="training-descriptions card">
              <div className="training-camp">
                <h1 className="training-header-sub">Consult with Coach Deniz -</h1>
                <h1 className="training-header-sub-sub">Get insight on how to improve your programs.</h1>
                <div className="ul-training1">
                  <p className="training-text-first">Consulting includes:</p>
                  <div className="ul-camps2">
                  <ul className="ul-camp-width2">
                    <li className="training-text3">Debunking the main issues and concerns regarding swimming related strength & drylands training.</li>
                    <li className="training-text3">Getting insights on how to best utilize optimize your own equipment and space for your team.</li>
                    <li className="training-text3">Option of including recommended exercise list specific to Your needs.</li>
                  </ul>
                  </div>
                  <div className="az-training-button2">
                    <a href="http://www.swimmerstrength.com/onlinetraining" className="training-link-text2">schedule now</a>
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
