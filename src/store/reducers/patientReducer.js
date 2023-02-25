import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patients: [
        { "id": "1", "name": "Arun Kumar", "email": "arun@gmail.com", "phone_number": "+91 9988776655", "dob": "05/05/1995" },
        { "id": "2", "name": "Vijay Kumar", "email": "vijay@gmail.com", "phone_number": "+91 9988776655", "dob": "05/05/1996" },
        { "id": "3", "name": "Murali Vijay", "email": "murali@gmail.com", "phone_number": "+91 9988776655", "dob": "05/05/1998" },
        { "id": "4", "name": "Prabhu Devendiran", "email": "kennysebastian@gmail.com", "phone_number": "+91 9988776655", "dob": "05/05/1999" },
        { "id": "5", "name": "Surya", "email": "Surya@gmail.com", "phone_number": "+91 9988776655", "dob": "05/05/1988" },
        { "id": "6", "name": "Purusho thaman", "email": "Purushothaman@gmail.com", "phone_number": "+91 9988776655", "dob": "05/05/1999" },
        { "id": "7", "name": "Raakesh", "email": "Raakesh@gmail.com", "phone_number": "+91 9988776655", "dob": "05/05/1998" },
        { "id": "8", "name": "Raghav", "email": "Raghav@gmail.com", "phone_number": "+91 9988776655", "dob": "05/05/1998" },
        { "id": "9", "name": "Kavitha", "email": "Kavitha@gmail.com", "phone_number": "+91 9988776655", "dob": "05/05/1998" },
        { "id": "10", "name": "Sabari nathan", "email": "Sabari@gmail.com", "phone_number": "+91 9988776655", "dob": "05/05/1998" },
        { "id": "11", "name": "Veni", "email": "Veni@gmail.com", "phone_number": "+91 9988776655", "dob": "05/05/1998" },
        { "id": "12", "name": "Senthil kumar", "email": "Senthil@gmail.com", "phone_number": "+91 9988776655", "dob": "05/05/1998" }
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
        },
    }
})

export const { fetchPatients, createPatient } = patientReducer.actions;

export default patientReducer.reducer;