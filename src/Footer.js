import React, { Component } from 'react';
import './Footer.css';
// import ReactDOM from 'react-dom';
// import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faCompass);



export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer-distributed">
          <a href='https://github.com/Sawa-Sawa-CF'><FontAwesomeIcon icon={['fab', 'github']} /></a>
          <div>
            <FontAwesomeIcon icon='far fa-compass' />
          </div>
        </footer>
      </>
    )
  }
}