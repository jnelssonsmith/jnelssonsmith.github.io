import React from 'react'

class Project extends React.Component {
  constructor(props) {
    super(props);

    this._renderTechnologies = this._renderTechnologies.bind(this);
  }

  _renderTechnologies() {

    const  {technologies, linkMap } = this.props;
    if (!technologies || technologies.length === 0) {
      return null;
    }

    return (
      <React.Fragment>
         <dt className="project__tech-label">Technologies:</dt>
          <dd className="project__tech-values">
            {technologies.map(linkID => (
              <a href={linkMap[linkID].href} className="no-underline project__technology">{linkMap[linkID].label}</a>
            ))}
          </dd>
      </React.Fragment>
    )
  }

  render() {
    const { title, role, client, employer, description, link, sourceCodeLink } = this.props;
    return (
      <div className="project">
        <div className="project__header-container">
          <div className="project__title-role">
            <p className="project__title">{title}</p>
            <p className="project__role">{role}</p>
          </div>
          <p className="project__company-image">{client}</p>
        </div>
        <div className="project__content">
          <p>{description}</p>
        </div>
        <div className="project__bottom-container">

          <p><a href="#">View source code</a></p>
          {this._renderTechnologies()}
        </div>
      </div>
    )
  }
}

export default Project
