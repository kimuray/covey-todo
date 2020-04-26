import { useEffect } from 'react'
import db from 'db'
import { Role } from 'stateType/Role'
import { useDispatch } from 'react-redux';
import { setRoles } from 'slices/roleSlice';
import { setTasks } from 'slices/taskSlice';
import { Task } from 'stateType/Task';

export const useSelectRoles = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    db.table("roles").toArray().then((roles: Array<Role>) => {
      dispatch(setRoles(roles))
    })
  }, [])
}

export const useSelectTasks = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    db.table("tasks").toArray().then((tasks: Array<Task>) => {
      dispatch(setTasks(tasks))
    })
  }, [])
}
