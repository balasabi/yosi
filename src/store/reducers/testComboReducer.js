import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    testCombo: [
        {"id":1,"testComboName": "Blood Combo", "testComboTestTypes": [ "Blood Test", "Allergy Test"],"price": "200" , status:"Active"},
         {"id":2, "testComboName": "Allergy Combo", "testComboTestTypes": [ "Allergy Test"], "price": "200" , status:"Active"},
         {"id":3,"testComboName": "Scan Combo", "testComboTestTypes": [ "Scan"], "price": "500",status:"Active" }
     ]
}

export const testComboReducer = createSlice({
    name: 'testComboReducer',
    initialState,
    reducers: {
        fetchTestCombo: (state, { payload }) => {
            state.testCombo = payload
        },
        createTestCombo: (state, { payload }) => {
            state.testCombo.push(payload)
        },
        updateTestCombo: (state, { payload }) => {
            state.testCombo = state.testCombo.map((item) => item.id === payload.id ? payload : item)
        },
        deleteTestComb: (state, { payload }) => {
            state.testCombo = payload;
        }
    }
})

export const { fetchTestCombo, createTestCombo, updateTestCombo,deleteTestComb } = testComboReducer.actions;

export default testComboReducer.reducer;