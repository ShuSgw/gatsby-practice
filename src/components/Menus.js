import React from "react"
import { Link } from "gatsby"

const Menus = props => {
  const { edges } = props.menus
  const allMenu = edges.map((menu, id) => {
    const menuTitleSlug = menu.node.slug
    const itemTitles = menu.node.items.map((item, id) => {
      return (
        <li key={id}>
          <Link to={item.slug !== null ? `/${item.slug}` : "/"}>
            {item.title}
          </Link>
          {item.child_items ? (
            <ul>
              {item.child_items.map((navChild, id) => {
                return (
                  <li key={id}>
                    <Link
                      to={navChild.slug !== null ? `/${navChild.slug}` : "/"}
                    >
                      {navChild.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          ) : null}
        </li>
      )
    })
    return (
      <div key={id}>
        <h2>{menuTitleSlug}</h2>
        <ul>{itemTitles}</ul>
      </div>
    )
  })
  return <div>{allMenu}</div>
}

export default Menus
