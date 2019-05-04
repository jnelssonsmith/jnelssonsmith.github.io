import React from 'react'
import { Link } from 'gatsby'

import Nav from './Nav';
import Footer from './Footer';
import DarkModeToggle from './DarkModeToggle';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      first: true,
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    window.__scrollLock();
    this.setState({
      navOpen: true,
      first: false,
    });
  }

  handleClose() {
    window.__scrollUnlock();
    this.setState({
      navOpen: false,
    });
  }


  render() {
    const { children, location, title, disableAnimations} = this.props
    const { navOpen, first } = this.state;

    const rootPath = `${__PATH_PREFIX__}/`
    const isHome = location.pathname === rootPath;
    
    let contentStyles = {};
    if (navOpen) {
      //contentStyles.display = 'none';
    }

    let navStyle = 'shade';
    if (navOpen) {
      navStyle += ' shade--open'
    } else if (!first) {
      navStyle += ' shade--close'
    }

    return (
      <div className="app">
        <Nav animateIn={isHome && !disableAnimations} onClose={this.handleClose} onOpen={this.handleOpen} isOpen={navOpen} />
        <div className={navStyle} />
        <div className="content" style={contentStyles}>
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
