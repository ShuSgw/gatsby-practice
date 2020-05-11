import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>Header with traditional CSS</h1>
      <div>
        <p>Header with css in js</p>
        <div>
          <p>Another Scoped styles</p>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-2/">Go to page 2</Link>
        </li>
        <li>
          <Link to="/page-3/">Go to page 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
