import { combineReducers } from "redux"
import { roleReducer } from '../slices/roleSlice';

export const rootReducer = combineReducers({
  roles: roleReducer
})

export type RootState = ReturnType<typeof rootReducer>
