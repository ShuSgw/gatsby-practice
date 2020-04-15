import React from "react"
import { Link } from "gatsby"

import "./header.scss"
import styles from "./header.module.css"

console.log(styles.title)

const Header = () => {
  return (
    <div>
      <h1>Header with traditional CSS</h1>
      <div className={styles.title}>
        <p>Header with css in js</p>
        <div className={styles.another}>
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
