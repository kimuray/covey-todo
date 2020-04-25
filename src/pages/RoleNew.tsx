import React, { useEffect } from 'react'
import { RoleForm } from 'components/Role/Form'
import { RoleList } from 'components/Role/List'
import { useDispatch } from 'react-redux';
import { Role } from 'stateType/Role';
import { setRoles } from 'slices/roleSlice';
import db from 'db';

export const RoleNew: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    db.table("roles").toArray().then((roles: Array<Role>) => {
      dispatch(setRoles(roles))
    })
  }, [])

  return (
    <>
      <h1>役割入力</h1>
      <RoleList />
      <RoleForm />
    </>
  )
}
