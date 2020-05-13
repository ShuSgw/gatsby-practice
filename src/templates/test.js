import React from "react"
import { Link } from "gatsby"

const Test = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  const NavLink = props => {
    if (!props.test) {
      return <Link to={props.url}>{props.text}</Link>
    } else {
      return <span>{props.text}は存在しません</span>
    }
  }
  return (
    <div>
      {group.map((each, id) => {
        return (
          <li key={id}>
            <Link key={id} to={`/post/${each.node.id}`}>
              {each.node.title}
            </Link>
          </li>
        )
      })}
      <div>
        <h4>
          {index}/{pageCount}
        </h4>
      </div>

      <div className="previousLink">
        <NavLink test={first} url={"/post/" + previousUrl} text="前のページ" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={"/post/" + nextUrl} text="次のページ" />
      </div>
    </div>
  )
}

export default Test
