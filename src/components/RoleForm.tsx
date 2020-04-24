import React from 'react'
import { useDispatch } from  "react-redux"
import { addRoles } from "slices/roleSlice"
import { Button } from './Button'

export const RoleForm: React.FC = () => {
  const dispatch = useDispatch()
  const [role, setRole] = React.useState("")

  return (
    <>
      <input
        type="text"
        value={role}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRole(e.target.value)}
      />
      <Button
        label="追加"
        onClick={() => {
          dispatch(addRoles(role))
          setRole("")
        }}
      />
    </>
  )
}
