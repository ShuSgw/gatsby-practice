import React, { Component } from "react"
import { Link } from "gatsby"
class PostListTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log(this.props.data)
    const { edges } = this.props.data.allWordpressPost
    // console.log(edges)

    return (
      <div>
        <h1>Post List</h1>
        <ul>
          {edges.map((post, index) => (
            <li key={index}>
              <Link to={`/post/${post.node.id}/`}>
                <p>{post.node.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default PostListTemplate

export const pageQuery = graphql`
  query postListQuery {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
