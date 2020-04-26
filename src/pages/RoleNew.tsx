import React from 'react'
import { useHistory } from 'react-router-dom'
import { RoleForm } from 'components/Role/Form'
import { RoleList } from 'components/Role/List'
import { useSelector } from 'react-redux'
import { Button } from 'components/Button'
import { RootState } from 'reducers/root'
import { useSelectRoles } from 'hooks/useDatabaseValues'

export const RoleNew: React.FC = () => {
  const history = useHistory()
  const roles = useSelector((state: RootState) => state.roles)

  useSelectRoles()

  return (
    <>
      <h1>役割入力</h1>
      <RoleList roles={roles} />
      <RoleForm />
      <Button label="次へ" onClick={() => history.push(`/roles/${roles[0].id}/tasks/new`)} />
    </>
  )
}
