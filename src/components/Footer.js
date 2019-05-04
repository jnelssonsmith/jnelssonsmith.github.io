import React from 'react'

import Links from './Links';

class Footer extends React.Component {
  render() {

    return (
      <footer>
        <div className="footer-content__container">
          <div className="links-container">
            <a href="/" className="no-underline home-container brush-stroke-logo brush-stroke-logo--light home-container--light">
              <span className="home-link">Josh Nelsson-Smith</span>
              <span className="home-link mobile-only">Josh N-S</span>
            </a>
            <Links isLight />
          </div>
          <div className="footer-content">
            <p>Made with <i class="fas fa-heart"></i> in Melbourne, Australia</p>
            <p>Copyright © 2019 Josh Nelsson-Smith</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;