import React, { Component } from 'react';
import Slider from "react-slick";

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
          <video className="main-video" loop autoPlay>
              <source src='video1.mp4' type="video/mp4" />
          </video>
        </div>
        <div className="home-about">
          <div className="home-about-pic">
            <img className="home-pic" src="https://i.imgur.com/4WbcVSx.jpg" alt="deniz portrait"/>
          </div>
          <div className="home-about-bio">
            <h1 className="about-header">Your coach: <br/>Deniz Hekmati, MS, CSCS</h1>
            <p className="about-text">Born and raised in Gothenburg, Sweden, Deniz is a strength & conditioning specialist & sport scientist. He came to the U.S. to attend Arizona State University and swim in the Pac-12 Conference as Rookie of the year 2012. Deniz then went on to attend the University of Utah where he earned his Masters of Science in exercise & sport science with an extension in sports psychology. In his collegiate and professional swimming career, Deniz swam several Pac-12 Championship finals and was a silver medalist at the 2012 Swedish National Championships in the 50-meter breaststroke. His professional career includes coaching the club teams’ age groupers, High-Schoolers, the University of Utah swimming & diving team, the current world record holder in sprint freestyles, Cesar Cielo from Brazil to two World Championship titles in 2013.<br/><br/>Deniz’s philosophy is to learn each athlete’s individual stage of physical and mental readiness, and then design the most appropriate training protocol in a way that resonates with the individual and team. This method has been shown to ensure that appropriate and measurable training adaptations occur on land to transfer into improvements in the water. With consistent sport scientific analysis of power jumps, upper & lower body strength, core endurance, and fundamental biomechanical emphasis, the results guide the training protocols, in turn helping to reduce the risk of injury.</p>
          </div>
        </div>
        <div className="home-header">
          <h1>Testimonials</h1>
        </div>
        <div className="slider-container">
        <Slider {...settings}>
         <div className="ind-slider">
           <div className="ind-slider-text">
           <p>“I was fortunate enough to be introduced to Deniz. I saw him give a presentation to a Division 1 swim team and I was highly impressed with his knowledge of swimming and his knowledge of connecting out of the pool work with the in the pool necessities of a swimmer.
            We implemented a lot of the stretches, mobility exercises, and strengthening exercises into our program this summer with our Senior level swimmers. It made a huge difference! Improved flexibility. Greater length of stroke. Stronger and more stable core. And a lot of fast swimming!
            I am so grateful for being able to implement the Swimmer Strength program into our daily routine. It’s a way to make sure your swimmers are understanding that swimming in the water isn’t the only way to get better. If you are doing the correct things outside the water that connects to improving thing in the water, results will definitely come.”
           </p>
           <h5>Brent Ransom, Head Coach Greater Toledo Aquatic Club</h5>
           </div>
         </div>
         <div className="ind-slider">
           <div className="ind-slider-text">
           <p>Swimmer Strength specializes in using a blend of science and art that is centered on the Swimmer, understanding every athlete is unique with different goals and background.  By taking time through discussions and baseline testing Deniz is able to apply specific components and a detailed plan to the athletes training plan and racing schedule to build a foundation of strength to meet and exceed goals in the pool.

            Understanding and determining what level of “dryland” and strength training for age group swimmers can be overwhelming and at times frustrating.  Swimmer Strength provides clarity through applied principles of science and experience as a swimmer and coach to athletes at all levels of competition and ability.

            Swimmer Strength / Deniz Hekmati application of science and biomechanics is a valuable component for the committed swimmer.  Deniz does not apply a cookie cutter program to your swimmer, but a detailed strategic plan to ensure success.  He spends a significant amount of time first talking with the swimmer to understand their strengths, weaknesses and more importantly them as an individual.  Finding a specialized coach that has been a high level swimmer and coach that is centered on building the foundations of strength and injury prevention for an athlete is rare.  Too many times you find a strength coach or fitness coach that has zero knowledge of swimming or or how to apply exercises to the complex training regimen and biomechanics of swimming.  You are left with programs that are stale and have no specific application for swimming, thus resulting in minimal or no success.  We have had the opportunity for our oldest son (D1 athlete) and youngest (age group swimmer) to work with Deniz, this has helped both of them attain and surpass goals in and out of the pool.
            Deniz Hekmati has a unique ability to work with athletes at all levels and ages to make a significant impact on their success.  Deniz applies athlete specific exercises to enhance strengths and correct weaknesses while also incorporating injury prevention exercises.  Deniz has first-hand knowledge as an elite swimmer himself, this enables him to build a plan centered on the biomechanics of swimming and stroke specific requirements.  Deniz provides clarity to the confusing list and theories of strength and dryland training to set you a part from the competition.
            </p>
            <h5>Bobby Lewis, Father | Online Training</h5>
         </div>
        </div>
         <div className="ind-slider">
           <div className="ind-slider-text">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           <h5>Jonas Persson, Head Coach University of Toledo | Workshop</h5>
         </div>
        </div>
         <div className="ind-slider">
           <div className="ind-slider-text">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           <h5>Thibault Capitane, French Pro Swimmer, 1st time World Championship qualifier | Online Training</h5>
         </div>
        </div>
       </Slider>
      </div>
      <div className="home-header">
        <h1>Contact</h1>
      </div>
      </div>
    );
  }
}

export default About;
