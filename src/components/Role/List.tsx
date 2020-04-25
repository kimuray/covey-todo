import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../reducers/root"
import { Role } from '../../stateType/Role';

export const RoleList: React.FC = () => {
  const roles = useSelector((state: RootState) => state.roles)

  return (
    <div>
      {roles.map((role: Role) => (
        <span key={role.id}>{role.name}</span>
      ))}
    </div>
  )
}
