import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { RoleForm } from 'components/Role/Form'
import { RoleList } from 'components/Role/List'
import { useDispatch, useSelector } from 'react-redux';
import { Role } from 'stateType/Role';
import { setRoles } from 'slices/roleSlice';
import db from 'db';
import { Button } from 'components/Button';
import { RootState } from 'reducers/root';

export const RoleNew: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const roles = useSelector((state: RootState) => state.roles)

  useEffect(() => {
    db.table("roles").toArray().then((result: Array<Role>) => {
      dispatch(setRoles(result))
    })
  }, [])

  return (
    <>
      <h1>役割入力</h1>
      <RoleList roles={roles} />
      <RoleForm />
      <Button
        label="次へ"
        onClick={
          () => history.push(`/roles/${roles[0].id}/tasks/new`)
        }
      />
    </>
  )
}
