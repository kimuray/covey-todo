import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { RoleNew } from "pages/RoleNew"
import { TaskNew } from "pages/TaskNew"

export const RootPage: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RoleNew} />
        <Route path="/roles/:id/tasks/new" component={TaskNew} />
      </Switch>
    </BrowserRouter>
  )
}
