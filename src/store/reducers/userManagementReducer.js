import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
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
            state.users = state.users.filter((item) => item.id === payload.id ? payload : item)
        }
    }
})

export const { createUser, updateUser } = userManagementReducer.actions;

export default userManagementReducer.reducer;