import React, { Component } from "react"
import Menus from "../components/Menus"

class PageList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    // console.log(this.props.data.allWordpressMenusMenusItems.edges)
  }

  render() {
    const menus = this.props.data.allWordpressMenusMenusItems
    console.log(menus)
    return <Menus menus={menus} />
  }
}

export default PageList

export const pageQuery = graphql`
  query menuList {
    allWordpressMenusMenusItems {
      edges {
        node {
          slug
          items {
            title
            url
          }
        }
      }
    }
  }
`
