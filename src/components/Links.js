import React from 'react'

class Links extends React.Component {
  render() {
    const { animateIn, isLight } = this.props
    return (
      <div className={`links${animateIn ? ' fade-in--nav' : ''}`}>
        <a
          className={`no-underline link__item${
            isLight ? ' link__item--light' : ''
          }`}
          href="https://www.linkedin.com/in/jnelssonsmith/"
        >
          <i class="fab fa-linkedin-in" />
        </a>
        <a
          className={`no-underline link__item${
            isLight ? ' link__item--light' : ''
          }`}
          href="https://twitter.com/jnelssonsmith"
        >
          <i class="fab fa-twitter" />
        </a>
        <a
          className={`no-underline link__item${
            isLight ? ' link__item--light' : ''
          }`}
          href="https://github.com/jnelssonsmith"
        >
          <i class="fab fa-github" />
        </a>
        <a
          className={`no-underline link__item${
            isLight ? ' link__item--light' : ''
          }`}
          href="mailto:jnelssonsmith.dev@gmail.com"
        >
          <i class="fas fa-envelope" />
        </a>
      </div>
    )
  }
}

export default Links
