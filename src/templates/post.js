import React, { Component } from "react"

class PostTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const { title, content, acf } = this.props.data.wordpressPost
    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {console.log(acf)}
        {acf ? acf.name : "no data"}
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
      acf {
        name
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
