import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Role } from 'stateType/Role';

const initialState: Array<Role> = []

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    addRoles: (state, { payload }: PayloadAction<Role>) => [...state, payload]
  }
})

export const roleReducer = roleSlice.reducer
export const { addRoles } = roleSlice.actions
