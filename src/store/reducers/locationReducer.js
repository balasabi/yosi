import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    location: [
       {
            id:1,
            location_code:"VLCY",
            location: "Velachery",
            status: "Active",
            lab_name: "Yosi Lab",
            lab_code:"YL001",
            manager:"Siva",
            address: "No.416 2nd street, Velachery, Chennai-600023",
        },
        {
            id:2,
            location_code:"ADYR",
            location: "Adyar",
            status: "Active",
            lab_name: "Yosi Lab",
            lab_code:"YL002",
            manager:"Gayathiri",
            address: "No.22 1st Kamarajar Avenue, Adyar, Chennai-600051",
        },
        
        {
            id:3,
            location_code:"MSB",
            location: "Chennai-Beach",
            status: "Active",
            lab_name: "Yosi Lab",
            lab_code:"YL003",
            manager:"Karthick",
            address: "No.126 Bharathiyar Street, Chennai-Beach,Chennai-600061",
        },
        {
            id:4,
            location_code:"AVD",
            location: "Avadi",
            status: "Active",
            lab_name: "Yosi Lab",
            lab_code:"YL004",
            manager:"Veni",
            address: "No.64 Paddy Field Road, Avadi, Chennai-600025",
        },
    ]
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
        deleteLocation: (state, { payload }) => {
            state.location = payload;
        }
    }
})

export const { fetchLocation, createLocation, updateLocation, deleteLocation } = locationReducer.actions;

export default locationReducer.reducer;