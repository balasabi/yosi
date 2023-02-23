import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    test_type: [
        // {
        //     id:1,
        //     code:"TT0001",
        //     name: "Insurance At-Home COVID Kit",
        //     status: "Active",
        //     display_name: "Rapid antigen test",
        //     description: "-Results in about 1 hour",
        //     // description_2: "-Tests for active infections"
        // },
        // {
        //     id:2,
        //     code:"TT0002",
        //     name: "Insurance At-Home COVID Kit",
        //     status: "Active",
        //     display_name: "Rapid antigen test",
        //     description: "-Results in about 1 hour",
        //     // description_2: "-Tests for active infections"
        // },
        // {
        //     id:3,
        //     code:"TT0003",
        //     name: "Insurance At-Home COVID Kit",
        //     status: "Active",
        //     display_name: "Rapid antigen test",
        //     description: "-Results in about 1 hour",
        //     // description_2: "-Tests for active infections"
        // },
        // {
        //     id:4,
        //     code:"TT0004",
        //     name: "Insurance At-Home COVID Kit",
        //     status: "Active",
        //     display_name: "Rapid antigen test",
        //     description: "-Results in about 1 hour",
        //     // description_2: "-Tests for active infections"
        // },
        // {
        //     id:5,
        //     code:"TT0005",
        //     name: "Insurance At-Home COVID Kit",
        //     status: "Active",
        //     display_name: "Rapid antigen test",
        //     description: "-Results in about 1 hour",
        //     // description_2: "-Tests for active infections"
        // },
        // {
        //     id:6,
        //     code:"TT0006",
        //     name: "Insurance At-Home COVID Kit",
        //     status: "Active",
        //     display_name: "Rapid antigen test",
        //     description: "-Results in about 1 hour",
        //     // description_2: "-Tests for active infections"
        // }
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
    }
})

export const { fetchTestType, createTestType, updateTestType } = testTypeReducer.actions;

export default testTypeReducer.reducer;