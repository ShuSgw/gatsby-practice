const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const createPaginatedPages = require("gatsby-paginate")
const _ = require(`lodash`)

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
      path: `/post/${edge.node.id}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  // category
  // const BlogCategories = allWordpressCategory.edges
  // let cat = []
  // const categoryTemplate = path.resolve(`./src/templates/category.js`)
  // _.each(BlogCategories, edge => {
  //   if (_.get(edge, "node.name")) {
  //     cats = cats.concat(edge.node.name)
  //   }
  // })
  // cats = _.uniq(cats)
  // cats.forEach(category => {
  //   createPage({
  //     path: `/categories/${category}/`,
  //     component: slash(categoryTemplate),
  //     context: {
  //       category: category, //<-これがpageContextとしてCategories.jsに渡る、queryで($category: String!)が使えるようになる
  //     },
  //   })
  // })

  // const categoryTemplate = path.resolve(`./src/templates/category.js`)
  // allWordpressCategory.edges.forEach(edge => {
  //   createPage({
  //     path: `/categories/${edge.node.id}/`,
  //     component: slash(categoryTemplate),
  //     context: {
  //       id: edge.node.id,
  //     },
  //   })
  // })

  // category 2
  // const createCategoryPages = require("gatsby-paginate")
  // createCategoryPages({
  //   edges: allWordpressCategory.edges,
  //   createPage: createPage,
  //   pageTemplate: "./src/templates/category.js",
  //   pageLength: 5,
  //   pathPrefix: "category",
  // })

  // page-nation
  createPaginatedPages({
    edges: allWordpressPost.edges,
    createPage: createPage,
    pageTemplate: "src/templates/test.js",
    pageLength: 5,
    pathPrefix: "post",
  })
}
