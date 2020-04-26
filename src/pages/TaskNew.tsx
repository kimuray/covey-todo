import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { RootState } from 'reducers/root';
import { useSelectRoles, useSelectTasks } from "hooks/useDatabaseValues";
import { TaskForm } from "components/Task/Form";
import { TaskList } from "components/Task/List";

export const TaskNew: React.FC = () => {
  useSelectRoles()
  useSelectTasks()

  // TODO: hooks実行前に一回renderされているので直す
  const { id } = useParams()
  const role = useSelector((state: RootState) => state.roles.find(role => role.id == id))
  const tasks = useSelector((state: RootState) => state.tasks.filter(task => task.roleId === role?.id))

  return (
    <>
      <h1>{role?.name}としてのタスク</h1>
      <TaskList tasks={tasks} />
      <TaskForm role={role} />
    </>
  )
}
