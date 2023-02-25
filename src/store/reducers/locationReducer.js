import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    location: []
}

export const locationReducer = createSlice({
    name: 'locationReducer',
    initialState,
    reducers: {
        fetchLocation: (state, { payload }) => {
            state.location = payload
        },
        createLocation: (state, { payload }) => {
            state.location.push(payload)
        },
        updateLocation: (state, { payload }) => {
            state.location = state.location.map((item) => item.id === payload.id ? payload : item)
        },
    }
})

export const { fetchLocation, createLocation, updateLocation } = locationReducer.actions;

export default locationReducer.reducer;