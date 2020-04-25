import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { RoleNew } from "pages/RoleNew"
import db from "db"
import { Role } from "stateType/Role"
import { useDispatch } from 'react-redux';
import { setRoles } from "slices/roleSlice"

export const RootPage: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RoleNew} />
      </Switch>
    </BrowserRouter>
  )
}
