import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: 'johndane',
  password: 'johndane',
  loggedIn: false,
  error: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      if ((state.username === action.payload.username) && (state.password === action.payload.password)) {
        state.loggedIn = true
        state.error = false
      } else {
        state.error = true
      }
    },
    logout: (state) => {
      state.loggedIn = false
      state.error = false
    }
  }
})

export const { login, logout } = userSlice.actions

export const selectUser = state => state.user

export default userSlice.reducer