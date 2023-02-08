import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: {}
}

export const sessionReducer = createSlice({
  name: 'sessionReducer',
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.isLogin = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginSuccess } = sessionReducer.actions

export default sessionReducer.reducer