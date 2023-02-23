import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  test_result: [ {
    id: 1,
    test_id: "WEL-000001",
    patient_name: "Kenny sebastin",
    test_type: "Insurance CAB Test - Camelback",
    collection_date: "12/13/2022 01:57:25",
    tube_number: "T5000",
    result: "Negative",
    analysis: "Result available"
},
{
    id: 2,
    test_id: "WEL-000002",
    patient_name: "Kenny sebastin",
    test_type: "Insurance CAB Test - Camelback",
    collection_date: "12/13/2022 01:57:25",
    tube_number: "T5000",
    result: "Negative",
    analysis: "Result available"
},
{
    id: 3,
    test_id: "WEL-000003",
    patient_name: "Kenny sebastin",
    test_type: "Insurance CAB Test - Camelback",
    collection_date: "12/13/2022 01:57:25",
    tube_number: "T5000",
    result: "Negative",
    analysis: "Result available"
},
{
    id: 4,
    test_id: "WEL-000004",
    patient_name: "Kenny sebastin",
    test_type: "Insurance CAB Test - Camelback",
    collection_date: "12/13/2022 01:57:25",
    tube_number: "T5000",
    result: "Negative",
    analysis: "Result available"
},
{
    id: 5,
    test_id: "WEL-000005",
    patient_name: "Kenny sebastin",
    test_type: "Insurance CAB Test - Camelback",
    collection_date: "12/13/2022 01:57:25",
    tube_number: "T5000",
    result: "Negative",
    analysis: "Result available"
},
{
    id: 6,
    test_id: "WEL-000006",
    patient_name: "Kenny sebastin",
    test_type: "Insurance CAB Test - Camelback",
    collection_date: "12/13/2022 01:57:25",
    tube_number: "T5000",
    result: "Negative",
    analysis: "Result available"
},
{
    id: 7,
    test_id: "WEL-000007",
    patient_name: "Kenny sebastin",
    test_type: "Insurance CAB Test - Camelback",
    collection_date: "12/13/2022 01:57:25",
    tube_number: "T5000",
    result: "Negative",
    analysis: "Result available"
},
{
    id: 8,
    test_id: "WEL-000008",
    patient_name: "Kenny sebastin",
    test_type: "Insurance CAB Test - Camelback",
    collection_date: "12/13/2022 01:57:25",
    tube_number: "T5000",
    result: "Negative",
    analysis: "Result available"
},
{
    id: 9,
    test_id: "WEL-000009",
    patient_name: "Kenny sebastin",
    test_type: "Insurance CAB Test - Camelback",
    collection_date: "12/13/2022 01:57:25",
    tube_number: "T5000",
    result: "Negative",
    analysis: "Result available"
},
{
    id: 10,
    test_id: "WEL-000010",
    patient_name: "Kenny sebastin",
    test_type: "Insurance CAB Test - Camelback",
    collection_date: "12/13/2022 01:57:25",
    tube_number: "T5000",
    result: "Negative",
    analysis: "Result available"
},
{
    id: 11,
    test_id: "WEL-000011",
    patient_name: "Kenny sebastin",
    test_type: "Insurance CAB Test - Camelback",
    collection_date: "12/13/2022 01:57:25",
    tube_number: "T5000",
    result: "Negative",
    analysis: "Result available"
},
{
    id: 12,
    test_id: "WEL-000012",
    patient_name: "Kenny sebastin",
    test_type: "Insurance CAB Test - Camelback",
    collection_date: "12/13/2022 01:57:25",
    tube_number: "T5000",
    result: "Negative",
    analysis: "Result available"
},]
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