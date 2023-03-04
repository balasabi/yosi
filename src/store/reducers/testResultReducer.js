import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uploads: [],
    test_result: [
        {
        id: 1,
        test_id: "WEL-000001",
        patient_name: "Ravi Kumar",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Negative",
        status: "Result available"
    },
    {
        id: 2,
        test_id: "WEL-000002",
        patient_name: "Sabari nathan",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Negative",
        status: "Result available"
    },
    {
        id: 3,
        test_id: "WEL-000003",
        patient_name: "Arun Kumar",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Negative",
        status: "Result available"
    },
    {
        id: 4,
        test_id: "WEL-000004",
        patient_name: "Siva",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Negative",
        status: "Result available"
    },
    {
        id: 5,
        test_id: "WEL-000005",
        patient_name: "Veni",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Positive",
        status: "Result available"
    },
    {
        id: 6,
        test_id: "WEL-000006",
        patient_name: "Kavitha",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Negative",
        status: "Result available"
    },
    {
        id: 7,
        test_id: "WEL-000007",
        patient_name: "Swathi",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Negative",
        status: "Result available"
    }
],
    openAlert: false,
    alertSeverity: '',
    alertMessage: '',
   
}

export const testResultReducer = createSlice({
    name: 'testResultReducer',
    initialState,
    reducers: {
        testResult: (state, { payload }) => {
            state.test_result.push(payload)
           },
       testResultUpload: (state, { payload }) => {
            state.uploads.push(payload)
        },
        displayAlert: (state, { payload }) => {
            state.openAlert = payload.openAlert
            state.alertSeverity = payload.alertSeverity
            state.alertMessage = payload.alertMessage
        },
        updateTestResult: (state, { payload }) => {
            state.test_result=payload
       },
    },
})

// Action creators are generated for each case reducer function
export const { testResult, sendTestResult, testResultUpload, displayAlert, updateTestResult } = testResultReducer.actions

export default testResultReducer.reducer