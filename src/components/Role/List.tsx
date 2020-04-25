import React from "react"
import { Role } from 'stateType/Role';

type PropsType = {
  roles: Array<Role>
}

export const RoleList: React.FC<PropsType> = ({ roles }) => {
  return (
    <div>
      {roles.map((role: Role) => (
        <span key={role.id}>{role.name}</span>
      ))}
    </div>
  )
}
