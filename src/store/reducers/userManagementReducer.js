import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        {
            "id": "1",
            "first_name": "Ravi",
            "last_name":"H",
            "email": "ravi123@gmail.com",
            "phone_number": "6767674535",
            "role": "Admin",
            "status": "Active"
        },
        {
            "id": "2",
            "first_name": "Janani",
            "last_name":"L",
            "email": "janani34@gmail.com",
            "phone_number": "8945357902",
            "role": "PSR Tech",
            "status": "Active"
        },
        {
            "id": "3",
            "first_name": "Arun",
            "last_name":"Kumar",
            "email": "arun24@gmail.com",
            "phone_number": "6743425643",
            "role": "Lab Executive",
            "status": "Active"
        },
        {
            "id": "4",
            "first_name": "Naveen",
            "last_name":"Raj",
            "email": "naveen3@gmail.com",
            "phone_number": "8954542357",
            "role": "System Admin",
            "status": "Active"
        }
    ],
}

export const userManagementReducer = createSlice({
    name: 'usersManagementReducer',
    initialState,
    reducers: {
        createUser: (state, { payload }) => {
            state.users.push(payload)
            // console.log("reducer"+JSON.stringify(state.users))
        },
        updateUser: (state, { payload }) => {
          state.users = state.users.map((item) => item.id === payload.id ? payload : item)
            // console.log("payload"+JSON.stringify(payload))
            console.log("&&&&&"+JSON.stringify(state.users))
        }
    }
})

export const { createUser, updateUser } = userManagementReducer.actions;

export default userManagementReducer.reducer;