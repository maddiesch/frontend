import React from "react"
import ReactDOM from "react-dom"

import "style/app.scss"

import App from "components/app"

ReactDOM.render(
  React.createElement(App, {}, {}),
  document.getElementById("root")
)
