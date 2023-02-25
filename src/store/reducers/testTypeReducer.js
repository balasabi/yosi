import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    test_type: [],
    category: [],
    classification: []
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
    }
})

export const { fetchTestType, createTestType, updateTestType, fetchCategory, createCategory, updateCategory, fetchClassification, createClassification, updateClassification } = testTypeReducer.actions;

export default testTypeReducer.reducer;