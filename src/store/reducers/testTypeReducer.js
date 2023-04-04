import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    test_type: [
        {
            id: 1,
            code: "TT001",
            name: "Blood Test",
            display_name: "Blood Test",
            description: "sample test",
            status: "Active",
        },
        {
            id: 2,
            code: "TT002",
            name: "Allergy Test",
            display_name: "Allergy Test",
            description: "sample test",
            status: "Active",
        },
        {
            id: 3,
            code: "TT003",
            name: "Scan",
            display_name: "Scan",
            description: "sample Scan",
            status: "Active",
        },
        {
            id: 4,
            code: "TT004",
            name: "Others",
            display_name: "Others",
            description: "sample test",
            status: "Active",
        }
    ],
    category: [
        {
            id: 1,
            name: "Respiratory Panels",
            code: "BRP001",
            short_code: "BRP",
            sequence_number: "1",
            status: "Active",
            description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
        },
        {
            id: 2,
            name: "Test Panels",
            code: "BRP002",
            short_code: "TP",
            sequence_number: "2",
            status: "Active",
            description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
        }, {
            id: 3,
            name: "Respiratory Panels",
            code: "BRP003",
            short_code: "BRP",
            sequence_number: "3",
            status: "Active",
            description: "*Respiratory Panels tests for SAR-CoV-2 (COVID-19), FLU-A, FLU-B, and Respiratory Syncytial Virus(RSV)",
        }
    ],
    classification: [
        {
            id: 1,
            name: "COVID/Influenza Test ",
            code: "PCR",
            test_type: "Scan",
            test_groups: "1",
            status: "Active",
        },
        {
            id: 2,
            name: "Influenza Test ",
            code: "PCR",
            test_type: "Blood Test",
            test_groups: "2",
            status: "Active",
        },
        {
            id: 3,
            name: "COVID Test ",
            code: "PCR",
            test_type: "Allergy Test",
            test_groups: "3",
            status: "Active",
        }
    ]
}

export const testTypeReducer = createSlice({
    name: 'testTypeReducer',
    initialState,
    reducers: {
        fetchTestType: (state, { payload }) => {
            state.test_type = payload
        },
        createTestType: (state, { payload }) => {
            state.test_type.push(payload)
        },
        updateTestType: (state, { payload }) => {
            state.test_type = state.test_type.map((item) => item.id === payload.id ? payload : item)
        },
        fetchCategory: (state, { payload }) => {
            state.category = payload
        },
        createCategory: (state, { payload }) => {
            state.category.push(payload)
        },
        updateCategory: (state, { payload }) => {
            state.category = state.category.map((item) => item.id === payload.id ? payload : item)
        },
        fetchClassification: (state, { payload }) => {
            state.classification = payload
        },
        createClassification: (state, { payload }) => {
            state.classification.push(payload)
        },
        updateClassification: (state, { payload }) => {
            state.classification = state.classification.map((item) => item.id === payload.id ? payload : item)
        },
        deleteTestType: (state, { payload }) => {
            state.test_type = payload;
        }
    }
})

export const { fetchTestType, createTestType, updateTestType, fetchCategory, createCategory, updateCategory, fetchClassification, createClassification, updateClassification, deleteTestType } = testTypeReducer.actions;

export default testTypeReducer.reducer;