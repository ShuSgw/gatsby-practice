import React from "react"
import { Link } from "gatsby"

const Menus = props => {
  const { edges } = props.menus
  const allMenu = edges.map((menu, id) => {
    const slug = menu.node.slug
    const itemTitles = menu.node.items.map((item, id) => {
      console.log(item.wordpress_id)
      return (
        <li key={id}>
          <Link to={item.slug}>{item.title}</Link>
        </li>
      )
    })
    return (
      <div key={id}>
        <h2>{slug}</h2>
        <ul>{itemTitles}</ul>
      </div>
    )
  })
  return <div>{allMenu}</div>
}

export default Menus
