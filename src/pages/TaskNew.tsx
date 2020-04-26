import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { RootState } from 'reducers/root';
import { useSelectRoles } from "hooks/useDatabaseValues";

export const TaskNew: React.FC = () => {
  useSelectRoles()

  const { id } = useParams()
  const roles = useSelector((state: RootState) => state.roles)
  const role = roles.find(role => role.id == id)

  return (
    <>
      <h1>{role?.name}としてのタスク</h1>
    </>
  )
}
