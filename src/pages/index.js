import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import '../assets/blog-post.scss';
import '../assets/syntax-highlighting.scss';

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      disableAnimations: null,
    }
  }

  componentDidMount() {
    const disableAnimations = sessionStorage.getItem('disable-animations');
    if (!disableAnimations) {
      sessionStorage.setItem('disable-animations', '.');
    }
    this.setState({ disableAnimations, loading: false })
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const { disableAnimations, loading } = this.state;

    if (loading) { return null; }
    return (
      <Layout disableAnimations={disableAnimations} location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio disableAnimations={disableAnimations} />
        <div className={!disableAnimations && "fade-in--nav"}>
          <hr />
          <h2 className="header--brush-stroke">
            <span className="brush-stroke-wrapper">
              <span className="brush-stroke-test">
                Latest Blog Posts
              </span>
            </span>
          </h2>
          <BlogPosts posts={posts} numberOfPosts={3} />
          <a className="blog-post-link" href="/blog">See all posts</a>
          <div style={{marginBottom: '100px'}}></div>
          <hr />
          <h2 className="header--brush-stroke">
            <span className="brush-stroke-wrapper">
              <span className="brush-stroke-test">
                Projects
              </span>
            </span>
          </h2>
          <p>Projects coming soon!</p>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
