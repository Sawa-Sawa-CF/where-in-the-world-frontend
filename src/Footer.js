import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'




export default class Footer extends Component {
  render() {




    return (
      <>
        <footer class="footer-distributed">

          <div class="footer-right">

            <a href="#"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
          </div>

          <div class="footer-left">

            <p class="footer-links">
              <a class="link-1" href="#">Home</a>
              <a href="#">About</a>
            </p>
            <p>Code Fellows &copy; 2022</p>
          </div>

        </footer>
      </>

    )
  }
}
