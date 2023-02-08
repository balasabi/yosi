import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  test_result: {}
}

export const testResultReducer = createSlice({
  name: 'testResultReducer',
  initialState,
  reducers: {
    testResult: (state, { payload }) => {
      state.test_result = payload
      console.log("******testResult******"+JSON.stringify(payload))
    }
  },
})

// Action creators are generated for each case reducer function
export const { testResult } = testResultReducer.actions

export default testResultReducer.reducer