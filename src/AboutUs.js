import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
  render() {
    return (
      <div className='about-us-root'>
        <div className='about-us-container'>
          <h2>Hello! Welcome to our site.</h2>
          <hr />
          <p>We'd like to introduce you to the software developers that made this application possible.
          </p>
          <hr />
          <h3>Abdinasir Yussuf</h3>
          <ul className='ul-item'>I am a software developer that is currently enrolled in the Code fellows 301 course.</ul>
          <h3>Bishal Khanal</h3>
          <ul className='ul-item'>Software developer and cloud enthusiast with a passion for learning and developing cloud based applications.</ul>
          <h3>Dwight Lindquist</h3>
          <ul className='ul-item'>I am an aspiring full-stack software developer with experience working with MERN and Python-Flask. I have experience building projects on a team of engineers.</ul>
          <h3>Katrina Hill</h3>
          <ul className='ul-item'>Software developer with a background in environmental compliance, enforcement, and management at the city and state level.</ul>
        </div>
      </div>
    );
  }
}
export default AboutUs;