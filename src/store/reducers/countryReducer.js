import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    country: [
        { "id": "1", 'code': '+91', 'name': 'India', 'iso': 'IND', 'status': 'Active' },
        { "id": "2", 'code': '+1', 'name': 'United States of America', 'iso': 'USA', 'status': 'Active' },
        { "id": "3", 'code': '+4', 'name': 'Colombia', 'iso': 'COL', 'status': 'Active' },
        { "id": "4", 'code': '+5', 'name': 'Pakistan', 'iso': 'PAK', 'status': 'Active' },
        { "id": "5", 'code': '+34', 'name': 'Africa', 'iso': 'AFR', 'status': 'Active' },
    ]
}

export const countryReducer = createSlice({
    name: 'countryReducer',
    initialState,
    reducers: {
        fetchCOuntry: (state, { payload }) => {
            state.country = payload
        },
        createCountry: (state, { payload }) => {
            state.country.push(payload)
        },
        updateCountry: (state, { payload }) => {
            state.country = state.country.map((item) => item.id === payload.id ? payload : item)
        },
    }
})

export const { fetchCountry, createCountry, updateCountry } = countryReducer.actions;

export default countryReducer.reducer;