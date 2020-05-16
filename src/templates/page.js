import React, { Component } from "react"
import Img from "gatsby-image"

class PageTemplate extends Component {
  render() {
    const { title, content, featured_media } = this.props.data.wordpressPage
    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {featured_media && (
          <Img fixed={featured_media.localFile.childImageSharp.fixed} />
        )}
      </div>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      id
      date(formatString: "MMMM DD, YYYY")
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
`
