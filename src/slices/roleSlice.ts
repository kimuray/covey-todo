import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: Array<string> = []

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    addRoles: (state, { payload }: PayloadAction<string>) => [...state, payload]
  }
})

export const roleReducer = roleSlice.reducer
export const { addRoles } = roleSlice.actions
