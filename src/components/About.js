import React, { Component } from 'react';
import Slider from "react-slick";
import ReactPlayer from 'react-player'


import RegisterForm from './RegisterForm'

class About extends Component {
  render() {
    var settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: true,
     autoplay: true,
     autoplaySpeed: 5000,
   };
    return (
      <div className="container">
        <div className="page-header">
          <h1 className="page-header-text">About</h1>
        </div>
        <div className="video-title">
        <div className="main-video">
          <ReactPlayer className="player" url="https://player.vimeo.com/video/320030298" width='100%' height='100%' playing loop/>
        </div>
        </div>
        <div className="home-about">
        <h1 className="mobile-about-header">Your coach</h1>
        <h1 className="mobile-about-header1">Deniz Hekmati, MS, CSCS</h1>
          <div className="home-about-pic">
            <img className="home-pic" src="https://i.imgur.com/4WbcVSx.jpg" alt="deniz portrait"/>
          </div>
          <div className="home-about-bio">
            <h1 className="about-header">Your coach: <br/>Deniz Hekmati, MS, CSCS</h1>
            <p className="about-text">Born and raised in Gothenburg, Sweden, Deniz is a strength & conditioning specialist & sport scientist. He came to the U.S. to attend Arizona State University and swim in the Pac-12 Conference as Rookie of the year 2012. Deniz then went on to attend the University of Utah where he earned his Masters of Science in exercise & sport science with an extension in sports psychology. In his collegiate and professional swimming career, Deniz swam several Pac-12 Championship finals and was a silver medalist at the 2012 Swedish National Championships in the 50-meter breaststroke. His professional career includes coaching the club teams’ age groupers, High-Schoolers, the University of Utah swimming & diving team, the current world record holder in sprint freestyles, Cesar Cielo from Brazil to two World Championship titles in 2013.<br/><br/>Deniz’s philosophy is to learn each athlete’s individual stage of physical and mental readiness, and then design the most appropriate training protocol in a way that resonates with the individual and team. This method has been shown to ensure that appropriate and measurable training adaptations occur on land to transfer into improvements in the water. With consistent sport scientific analysis of power jumps, upper & lower body strength, core endurance, and fundamental biomechanical emphasis, the results guide the training protocols, in turn helping to reduce the risk of injury.</p>
          </div>
        </div>
        <div className="home-header">
          <h1 className="testimonial-header-mobile">Testimonials</h1>
        </div>
        <Slider {...settings}>
         <div>
           <p className="slider-text">“I was fortunate enough to be introduced to Deniz, He gave a presentation to a D1 swim team and I was highly impressed with his knowledge of swimming and connecting out-of-pool work with in-the-pool necessities of a swimmer. Stretches, mobility exercises and strengthening exercises were implemented into our program. It made a huge difference-improved flexibility, greater stroke length and a more stable core, and a lot of fast swimming! I am grateful for implementing the Swimmer Strength program. My swimmers are able to now understand that swimming in the water isn’t the only way to get faster. If correct exercises are done outside of the water, results will definitely come!”
           </p>
           <h4 className="slider-header">Brent Ransom, Head Coach Greater Toledo Aquatic Club</h4>
         </div>
         <div>
           <p className="slider-text">"Swimmer Strength specializes in using a blend of science and art that is centered on the swimmer. Through discussions and baseline testing, Deniz is able to apply specific components and a detailed plan and racing schedule to build a foundation of strength to meet and exceed goals in the pool. Swimmer Strength provides clarity of “dryland” training through applied principles of science and experience to athletes at all levels of competition and ability. It is rare to find a specialized coach that has been a high level swimmer and coach, we have had the opportunity for our oldest son (D1 athlete) and youngest (age group swimmer) to work with Deniz which has helped both of them attain and surpass goals in and out of the pool."
            </p>
            <h4 className="slider-header">Bobby Lewis, Father | Online Training</h4>
        </div>
         <div>
           <p className="slider-text">"Being an online client with Swimmer Strength has elevated not just my swimming times, but my knowledge for strength training. Deniz has the unique ability to make you feel like his only client when he has numerous. I have never felt more explosive off the block in my life. All credit is due to Deniz and Swimmer Strength."</p>
           <h4 className="slider-header">David Newman, Swimmer | Online Training</h4>
        </div>
       </Slider>
      <div className="grey">
        <div className="home-header">
          <h1 className="no-margin-bottom contact-header">Contact</h1>
        </div>
        <RegisterForm/>
      </div>
      </div>
    );
  }
}

export default About;
