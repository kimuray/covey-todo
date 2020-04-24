import React from "react"
import ReactDOM from "react-dom"
import "core-js/stable"
import "regenerator-runtime/runtime"
import { Provider } from "react-redux"
import { RootPage } from "pages/RootPage"
import { store } from 'store'

ReactDOM.render(
  <Provider store={store}>
    <RootPage />
  </Provider>,
  document.getElementById("root")
)
