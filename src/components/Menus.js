import React from "react"

const Menus = props => {
  const { edges } = props.menus
  const allMenu = edges.map((menu, id) => {
    const slug = menu.node.slug
    const itemTitles = menu.node.items.map((item, id) => {
      return <li key={id}>{item.title}</li>
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
