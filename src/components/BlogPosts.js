import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from './Layout'
import { number } from 'prop-types';

class BlogPosts extends React.Component {
  render() {
    const { numberOfPosts, posts } = this.props;
    
    let filteredPosts = posts;
    if (numberOfPosts) {
      filteredPosts = posts.slice(0, numberOfPosts);
    }

    if (!filteredPosts) {
      return null;
    }
  
    return (
      filteredPosts.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3>
              <Link class="blog-post-link" style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })
    )
  }
}

export default BlogPosts