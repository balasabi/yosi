import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   patients:[
    { "id": "1", "name": "ArunKumar", "email": "kennysebastian@gmail.com", "phone": "+91 9988776655", "dob": "05/05/1995" },
    { "id": "2", "name": "VijayKumar", "email": "kennysebastian@gmail.com", "phone": "+91 9988776655", "dob": "05/05/1996" },
    { "id": "3", "name": "MuraliVijay", "email": "kennysebastian@gmail.com", "phone": "+91 9988776655", "dob": "05/05/1998" },
    { "id": "4", "name": "PrabhuDevendiran", "email": "kennysebastian@gmail.com", "phone": "+91 9988776655", "dob": "05/05/1999" },
    { "id": "5", "name": "Surya", "email": "kennysebastian@gmail.com", "phone": "+91 9988776655", "dob": "05/05/1988" },
    { "id": "6", "name": "PurushoThaman", "email": "kennysebastian@gmail.com", "phone": "+91 9988776655", "dob": "05/05/1999" },
    { "id": "7", "name": "Raakesh", "email": "kennysebastian@gmail.com", "phone": "+91 9988776655", "dob": "05/05/1998" },
    { "id": "8", "name": "Raghav", "email": "kennysebastian@gmail.com", "phone": "+91 9988776655", "dob": "05/05/1998" },
    { "id": "9", "name": "Kenny", "email": "kennysebastian@gmail.com", "phone": "+91 9988776655", "dob": "05/05/1998" },
    { "id": "10", "name": "SabariNathan", "email": "kennysebastian@gmail.com", "phone": "+91 9988776655", "dob": "05/05/1998" },
    { "id": "11", "name": "Kenny", "email": "kennysebastian@gmail.com", "phone": "+91 9988776655", "dob": "05/05/1998" },
    { "id": "12", "name": "Sebatian", "email": "kennysebastian@gmail.com", "phone": "+91 9988776655", "dob": "05/05/1998" }
]
}

export const patientReducer = createSlice({
    name: 'patientReducer',
    initialState,
    reducers: {
        fetchPatients: (state, { payload }) => {
            state.patients = payload
        },
        createPatient: (state, { payload }) => {
            state.patients.push(payload)
            // updateData('patients', 'ADD', payload);
        },
    }
})

export const { fetchPatients, createPatient } = patientReducer.actions;

export default patientReducer.reducer;