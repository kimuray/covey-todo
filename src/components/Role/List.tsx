import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../reducers/root"

export const RoleList: React.FC = () => {
  const roles = useSelector((state: RootState) => state.roles)

  return (
    <div>
      {roles.map(role => (
        <span>{role}</span>
      ))}
    </div>
  )
}
