import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulPost.edges

    return (
      <main style={{textAlign:"center"}}>
        <SEO title="Blog" />
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div style={{
              margin: `20px 10px`, 
              borderRadius: 10, 
              overflow: `hidden`, 
              textAlign: `center`, 
              maxWidth:"30vw", 
              display:"inline-block"
              }} 
            >
            <div key={node.slug}>
            <Link style={{textDecoration:"none"}} to={node.slug}> 
              <div>
              <img 
              src={node.image.fluid.src} 
              alt={node.title} 
              style={{
                width:"100%", 
                height:300
                }}/>
                <h3 >
                  <Link style={{ 
                    color: `black`, 
                    fontWeight: 300, 
                    fontSize:"2rem", 
                    textDecoration:`none` }} to={node.slug}>
                    {title}
                  </Link>

                </h3>
              </div>
            </Link>
              <div >
                <p style={{color:`black`}}> {node.subtitle} </p>
              </div>
            </div>
            
            </div>
          )
        })}
      </main>
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
