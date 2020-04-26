import React from 'react'
import { Task } from 'stateType/Task'

type PropsType = {
  roles: Array<Task>
}

export const TaskList: React.FC<PropsType> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <p key={task.id}>{task.name}</p>
      ))}
    </div>
  )
}
