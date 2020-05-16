import React, { Component } from "react"

class PageTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props.data)
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
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
    }
  }
`
