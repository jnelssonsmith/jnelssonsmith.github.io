import React from 'react'

class Links extends React.Component {
  render() {
    const { animateIn, isLight } = this.props;
    return (
      <div className={`links${animateIn ? ' fade-in--nav' : ''}`}>
        <a className={`no-underline link__item${isLight ? ' link__item--light' : ''}`} href="https://www.linkedin.com/in/jnelssonsmith/">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a className={`no-underline link__item${isLight ? ' link__item--light' : ''}`} href="https://twitter.com/jnelssonsmith">
          <i class="fab fa-twitter"></i>
        </a>
        <a className={`no-underline link__item${isLight ? ' link__item--light' : ''}`} href="https://github.com/jnelssonsmith">
          <i class="fab fa-github"></i>
        </a>
        <a className={`no-underline link__item${isLight ? ' link__item--light' : ''}`} href="mailto:https://github.com/jnelssonsmith">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    )
  }
}

export default Links
