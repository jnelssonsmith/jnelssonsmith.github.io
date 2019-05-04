import React from 'react'
import DarkModeToggle from './DarkModeToggle'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialTheme: null,
    }
  }

  componentDidMount() {
    this.setState({
      initialTheme: localStorage.getItem('theme') || 'light',
    })
  }

  render() {
    const { isOpen, onOpen, onClose, animateIn } = this.props
    const { initialTheme } = this.state
    return (
      <nav className={`navigation-bar${animateIn ? ' fade-in--nav' : ''}`}>
        {isOpen ? (
          <div className="menu-container">
            <a className="menu-link" href="/">
              Home
            </a>
            <a className="menu-link" href="/blog">
              Blog
            </a>
            <a className="menu-link" href="/projects">
              Projects
            </a>
            <button className="menu-link menu-link--btn" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <React.Fragment>
            <a
              href="/"
              className="no-underline home-container brush-stroke-logo"
            >
              <span className="home-link">Josh Nelsson-Smith</span>
              <span className="home-link mobile-only">Josh N-S</span>
            </a>
            <div className="nav-link-container">
              <div className="toggle-container">
                {initialTheme && <DarkModeToggle initialTheme={initialTheme} />}
              </div>
              <a className="no-underline nav-link first" href="/blog">
                Blog
              </a>
              <a className="no-underline nav-link" href="/projects">
                Projects
              </a>
              <a
                className="no-underline nav-link menu mobile-only"
                onClick={onOpen}
              >
                <i className="fa fa-bars" />
              </a>
            </div>
          </React.Fragment>
        )}
      </nav>
    )
  }
}

export default Nav
