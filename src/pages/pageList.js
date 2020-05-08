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
    const menus = this.props.data.allWordpressMenusMenusItems.edges
    const obj = menus.reduce((obj, data) => {
      console.log(data)

      //   obj[data.slug] = data
      //   return obj
    }, {})
    // console.log(obj)

    return <Menus />
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
