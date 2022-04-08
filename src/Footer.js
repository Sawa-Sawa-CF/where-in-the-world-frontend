import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer class="footer-distributed">
          <div class="footer-right">
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
