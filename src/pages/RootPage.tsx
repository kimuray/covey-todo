import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { RoleNew } from "pages/RoleNew"

export const RootPage: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={RoleNew} />
    </Switch>
  </BrowserRouter>
)
