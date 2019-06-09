import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

class BlogPostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    // const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <>
        <SEO
          title={post.title}
          description={post.subtitle}
        />
      <div style={{maxWidth:"80vw", margin:"0 auto", textAlign:"center"}}>
        <h1 style={{color:"black"}}>{post.title}</h1>
        <img style={{maxWidth:"100%", marginTop:20}} src={post.image.fluid.src} alt={post.title}/>
        <div style={{color:"black", textAlign:"justify"}}dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }}/>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link style={{color:"black"}} to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link style={{color:"black"}} to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>

        </div>
      </>
    )
  }
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPost( slug: { eq: $slug }){
      title
      subtitle
      author
      image{
        fluid{
          src
        }
      }
      content {
        childContentfulRichText{
          html
        }
      }
    }
  }
`
