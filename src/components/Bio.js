import React from 'react'
import Links from './Links'

class Bio extends React.Component {
  render() {
    const { disableAnimations } = this.props;
    return (
      <div className="intro">
        <p><span className={`bio-text ${!disableAnimations ? ' intro-anim intro-anim--first' : ''}`}>Hi, I'm</span> <span className={`${!disableAnimations ? 'brush-anim brush-anim--first' : ''} bio-brush-stroke bio-brush-stroke--josh`}>Josh</span></p>
        <p><span className={`bio-text ${!disableAnimations ? ' intro-anim intro-anim--second' : ''}`}>I'm a</span><br className="mobile-break"/><span className={`${!disableAnimations ? 'brush-anim brush-anim--second' : ''} bio-brush-stroke bio-brush-stroke--job`}>Front-End Engineer</span></p>
        <p><span className={`bio-text ${!disableAnimations ? ' intro-anim intro-anim--third' : ''}`}>Currently based in</span><br className="mobile-break"/><span className={`${!disableAnimations ? 'brush-anim brush-anim--third' : ''} bio-brush-stroke bio-brush-stroke--location`}>Melbourne, Australia</span></p>
        <Links animateIn={!disableAnimations} />
      </div>
    )
  }
}

export default Bio
