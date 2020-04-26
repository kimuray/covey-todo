import { combineReducers } from "redux"
import { roleReducer } from '../slices/roleSlice'
import { taskReducer } from '../slices/taskSlice'

export const rootReducer = combineReducers({
  roles: roleReducer,
  tasks: taskReducer
})

export type RootState = ReturnType<typeof rootReducer>
