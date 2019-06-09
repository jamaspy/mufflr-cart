import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulPost.edges

    return (
      <>
        <SEO title="All posts" />
      
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div >
            <div key={node.slug}>
            <Link to={node.slug}> 
              <div >
              <img src={node.image.fluid.src} alt={node.title} style={{width:"100%", height:300}}/>
                <h3>
                  <Link style={{ color: `white`, boxShadow: `none`, fontWeight: 300, fontSize:"2rem" }} to={node.slug}>
                    {title}
                  </Link>
                </h3>
              </div>
            </Link>
              <div >
              <p style={{color:`white`}}> {node.subtitle} </p>
              </div>
            </div>
            
            </div>
          )
        })}
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        }
      }
        allContentfulPost {
        edges {
          node {
            title
            subtitle
            author
            slug
            image{
              fluid{
                src
              }
            }
        }
      }
    }
  }
`
