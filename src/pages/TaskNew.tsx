import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { RootState } from 'reducers/root'
import { useSelectRoles, useSelectTasks } from 'hooks/useDatabaseValues'
import { TaskForm } from 'components/Task/Form'
import { TaskList } from 'components/Task/List'
import { Role } from 'stateType/Role'
import { Button } from 'components/Button'

// TODO: リファクタリング
const nextIndex = (roles: Array<Role>, currentRole: Role) => {
  const currentIndex = roles.map((role) => role.id).indexOf(currentRole?.id)
  return roles[currentIndex + 1] ? currentIndex + 1 : undefined
}

export const TaskNew: React.FC = () => {
  useSelectRoles()
  useSelectTasks()

  // TODO: hooks実行前に一回renderされているので直す
  const { id } = useParams()
  const history = useHistory()
  const roles = useSelector((state: RootState) => state.roles)
  const role = roles.find((role) => role.id == id)
  const nextId = nextIndex(roles, role)
  const tasks = useSelector((state: RootState) => state.tasks.filter((task) => task.roleId === role?.id))

  return (
    <>
      <h1>{role?.name}としてのタスク</h1>
      <TaskList tasks={tasks} />
      <TaskForm role={role} />
      <Button
        label="次へ"
        onClick={() => {
          if (nextId) {
            history.push(`/roles/${roles[nextId].id}/tasks/new`)
          } else {
            history.push(`/`)
          }
        }}
      />
    </>
  )
}
