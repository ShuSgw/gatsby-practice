import React from "react"
import Header from "./Header"

import "./wrapper.scss"

const Wrapper = props => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  )
}

export default Wrapper
