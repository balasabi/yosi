import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
}

export const userManagementReducer = createSlice({
    name: 'usersManagementReducer',
    initialState,
    reducers: {
        createUser: (state, { payload }) => {
            users.push(payload)
        }
    }
})

export const {createUser } = userManagementReducer.actions;

export default userManagementReducer.reducer;