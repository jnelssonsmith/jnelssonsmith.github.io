import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'


import Projects from '../../components/Projects'
import '../../assets/index.scss';

class ProjectsPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <h2 className="header--brush-stroke">
            <span className="brush-stroke-wrapper">
              <span className="brush-stroke--variable-width">Projects</span>
            </span>
          </h2>
        <Projects />
      </Layout>
    )
  }
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
