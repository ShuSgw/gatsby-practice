import React, { Component } from "react"
import Img from "gatsby-image"
// import PropTypes from "prop-types"

class PostTemplate extends Component {
  render() {
    const {
      title,
      content,
      acf,
      featured_media,
      categories,
    } = this.props.data.wordpressPost

    return (
      <div>
        <h1>{title}</h1>
        {categories.map((caetegory, id) => (
          <p>{caetegory.name}</p>
        ))}
        {console.log(categories)}
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <p>{acf ? (acf.name ? acf.name : "no name") : "no data"}</p>
        {featured_media && (
          <Img fixed={featured_media.localFile.childImageSharp.fixed} />
        )}
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      slug
      id
      date(formatString: "MMMM DD, YYYY")
      categories {
        id
        name
      }
      acf {
        name
      }
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
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
