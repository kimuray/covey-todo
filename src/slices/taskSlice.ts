import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from 'stateType/Task'

const initialState: Array<Task> = []

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (_, { payload }: PayloadAction<Array<Task>>) => payload,
    addTask: (state, { payload }: PayloadAction<Task>) => [...state, payload],
  },
})

export const taskReducer = taskSlice.reducer
export const { setTasks, addTask } = taskSlice.actions
