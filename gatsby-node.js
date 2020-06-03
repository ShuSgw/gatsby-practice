const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
            slug
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            path
            status
            template
            format
            slug
            title
            featured_media {
              localFile {
                childImageSharp {
                  fixed(height: 300, width: 300) {
                    height
                    width
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }
  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressCategory,
  } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
  // Create Post posts.
  const postTemplate = path.resolve(`./src/templates/post.js`)
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  // category
  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  allWordpressCategory.edges.forEach(edge => {
    createPage({
      path: `/categories/${edge.node.id}/`,
      component: slash(categoryTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
  // page-nation
  const createPaginatedPages = require("gatsby-paginate")

  createPaginatedPages({
    edges: allWordpressPost.edges,
    createPage: createPage,
    pageTemplate: "src/templates/test.js",
    pageLength: 5,
    pathPrefix: "post",
  })
}
