import React from 'react'

import Project from './Project'
import projects from '../assets/projects.json';

class Projects extends React.Component {
  render() {
    const { numberOfProjects }= this.props;
    
    let filteredProjects = projects.data
    if (numberOfProjects) {
      filteredProjects = projects.data.slice(0, numberOfProjects)
    }

    return (
      <div className="projects">
        {filteredProjects.map(p => (<Project {...p} linkMap={projects.linkMap} />))}
      </div>
    )
  }
}

export default Projects
