import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uploads: [{
            test_upload_name: "T-00000126",
            tube_number: "NT208255979",
            result: "Positive",
            file_name: "API",
            created_by: "-",
            created_date: "12/21/2022",
            status: "Success",
        },
        {
            test_upload_name: "T-00000126",
            tube_number: "NT208255979",
            result: "Negative",
            file_name: "API",
            created_by: "-",
            created_date: "12/21/2022",
            status: "Success",
        },
        {
            test_upload_name: "T-00000126",
            tube_number: "NT208255979",
            result: "Positive",
            file_name: "API",
            created_by: "-",
            created_date: "12/21/2022",
            status: "Success",
        },
        {
            test_upload_name: "T-00000126",
            tube_number: "NT208255979",
            result: "Negative",
            file_name: "API",
            created_by: "-",
            created_date: "12/21/2022",
            status: "Success",
        },
        {
            test_upload_name: "T-00000126",
            tube_number: "NT208255979",
            result: "Negative",
            file_name: "API",
            created_by: "-",
            created_date: "12/21/2022",
            status: "Failure",
        },
        {
            test_upload_name: "T-00000126",
            tube_number: "NT208255979",
            result: "Positive",
            file_name: "API",
            created_by: "-",
            created_date: "12/21/2022",
            status: "Success",
        },
        {
            test_upload_name: "T-00000126",
            tube_number: "NT208255979",
            result: "Negative",
            file_name: "API",
            created_by: "-",
            created_date: "12/21/2022",
            status: "Failure",
        },
        {
            test_upload_name: "T-00000126",
            tube_number: "NT208255979",
            result: "Positive",
            file_name: "API",
            created_by: "-",
            created_date: "12/21/2022",
            status: "Failure",
        },
        {
            test_upload_name: "T-00000126",
            tube_number: "NT208255979",
            result: "Negative",
            file_name: "API",
            created_by: "-",
            created_date: "12/21/2022",
            status: "Success",
        },
        {
            test_upload_name: "T-00000126",
            tube_number: "NT208255979",
            result: "Negative",
            file_name: "API",
            created_by: "-",
            created_date: "12/21/2022",
            status: "Success",
        },
        {
            test_upload_name: "T-00000126",
            tube_number: "NT208255979",
            result: "Negative",
            file_name: "API",
            created_by: "-",
            created_date: "12/21/2022",
            status: "Success",
        },
        {
            test_upload_name: "T-00000126",
            tube_number: "NT208255979",
            result: "Negative",
            file_name: "API",
            created_by: "-",
            created_date: "12/21/2022",
            status: "Failure",
        }],
    test_result: [{
        id: 1,
        test_id: "WEL-000001",
        patient_name: "Ravi Kumar",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Negative",
        analysis: "Result available"
    },
    {
        id: 2,
        test_id: "WEL-000002",
        patient_name: "Sabari nathan",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Negative",
        analysis: "Result available"
    },
    {
        id: 3,
        test_id: "WEL-000003",
        patient_name: "Arun Kumar",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Negative",
        analysis: "Result available"
    },
    {
        id: 4,
        test_id: "WEL-000004",
        patient_name: "Siva",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Negative",
        analysis: "Result available"
    },
    {
        id: 5,
        test_id: "WEL-000005",
        patient_name: "Veni",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Positive",
        analysis: "Result available"
    },
    {
        id: 6,
        test_id: "WEL-000006",
        patient_name: "Kavitha",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Negative",
        analysis: "Result available"
    },
    {
        id: 7,
        test_id: "WEL-000007",
        patient_name: "Swathi",
        test_type: "Insurance CAB Test - Camelback",
        collection_date: "12/13/2022 01:57:25",
        tube_number: "T5000",
        result: "Negative",
        analysis: "Result available"
    }],
   
}

export const testResultReducer = createSlice({
    name: 'testResultReducer',
    initialState,
    reducers: {
        testResult: (state, { payload }) => {
            state.test_result.push(payload)
            // console.log("******testResult******" + JSON.stringify(payload.state))
        },
        sendTestResult: (state, { payload }) => {
            console.log("******testResult******" + JSON.stringify(payload))
            state.alert = payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { testResult, sendTestResult } = testResultReducer.actions

export default testResultReducer.reducer