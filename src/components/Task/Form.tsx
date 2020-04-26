import React, { useState } from "react"
import { Role } from 'stateType/Role'
import { Button } from "components/Button"
import db from "db"
import { useDispatch } from 'react-redux'
import { addTask } from "slices/taskSlice"

type PropsType = {
  role: Role
}

export const TaskForm: React.FC<PropsType> = ({ role }) => {
  const dispatch = useDispatch()
  const [task, setTask] = useState("")

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={
          (e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)
        }
      />
      <Button
        label="追加"
        onClick={
          () => {
            db.table("tasks")
              .add({ roleId: role.id, name: task })
              .then(id => {
                dispatch(addTask({ id: id, roleId: role.id, name: task}))
                setTask("")
              })
          }
        }
      />
    </>
  )
}
