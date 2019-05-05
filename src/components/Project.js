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
          <p className="project__company-image">Comapany Image</p>
        </div>
        <div className="project__content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ultricies quam. Sed varius, neque a mattis malesuada, sem ex fermentum orci, rhoncus posuere lectus quam pharetra dui. Nullam sit amet semper mi. In purus sapien, blandit ut commodo id, auctor in nibh. Morbi porttitor velit eu ex fermentum tempor. Suspendisse tempus pretium arcu, ut feugiat est pharetra vitae. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam dui est, bibendum quis sapien ac, molestie accumsan mauris. Suspendisse porttitor nibh a cursus blandit. Donec iaculis viverra lacus eget scelerisque. Nulla iaculis massa at lectus tempor, ut mollis velit lacinia. Sed id ligula et nisi sodales mollis at nec lacus.</p>
        </div>
        <div className="project__?-container">
          <dt className="project__tech-label">Technologies:</dt>
          <dd className="project__tech-values">
            <span className="project__technology">React</span>
            <span className="project__technology">Redux</span>
          </dd>
        </div>
      </div>
    )
  }
}

export default Project
