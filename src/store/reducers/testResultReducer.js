import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  test_result: []
}

export const testResultReducer = createSlice({
  name: 'testResultReducer',
  initialState,
  reducers: {
    testResult: (state, { payload }) => {
      state.test_result.push(payload) 
      console.log("******testResult******"+JSON.stringify(payload))
    },
    //  fetchTestResult: (state, { payload }) => {
    //    state.test_result = payload
    //    console.log("******fetchTestResult******"+JSON.stringify(payload))
    // }
  },
})

// Action creators are generated for each case reducer function
export const { testResult, fetchTestResult } = testResultReducer.actions

export default testResultReducer.reducer