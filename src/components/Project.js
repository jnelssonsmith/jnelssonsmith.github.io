import React from 'react'

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="project__header-container">
          <div className="project__title-role">
            <p className="project__title">Project Name</p>
            <p className="project__role">Front-end Developer</p>
          </div>
          <p className="project__company-image">Personal Project</p>
        </div>
        <div className="project__content">
          <p>Blah</p>
        </div>
        <div className="project__bottom-container">
          <dt className="project__tech-label">Technologies:</dt>
          <dd className="project__tech-values">
            <a className="no-underline project__technology">React</a>
            <a className="no-underline project__technology">Redux</a>
          </dd>
        </div>
      </div>
    )
  }
}

export default Project
