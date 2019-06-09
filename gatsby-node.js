// **NOTES** Here we are creating multiple Promisees shopItems and Blog. Notice we are again just using graphql directly, which actually returns a Promise. We are calling .then() to chain a callback function, under which we are creating the pages through createPage API.

// Returning Promise.all([shopItems, Blog]) ensures that our operation is successfully completed, before gatsby moves to create page files.


const path = require(`path`)

//2 Graphql CreatePages calls - 1)Shopify 2)Contentful
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // SHOPIFY - Create Shop
  const shopItems = graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.handle}/`,
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })
  })

  //CONTENTFUl - Create Blog 
  const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)
  const blogs = graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              title
              subtitle
              slug
              image {
                fluid {
                  src
                }
              }
              content {
                childContentfulRichText {
                  html
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allContentfulPost.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
  return Promise.all([shopItems, blogs])
}