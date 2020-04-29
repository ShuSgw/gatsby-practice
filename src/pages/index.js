import React from "react"
import Wrapper from "../components/Wrapper"
import { Link } from "gatsby"

const IndexPage = () => (
  <Wrapper>
    <h2>Home Page - Wp api</h2>
    <ul>
      <li>
        <Link to="/post/">Post List</Link>
      </li>
      <li>
        <Link to="/pages/">Page List</Link>
      </li>
    </ul>
  </Wrapper>
)

export default IndexPage
