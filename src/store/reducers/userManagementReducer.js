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
          state.users = state.users.map((item) => item.id === payload.id ? payload : item)
            // console.log("payload"+JSON.stringify(payload))
            console.log("&&&&&"+JSON.stringify(state.users))
        }
    }
})

export const { createUser, updateUser } = userManagementReducer.actions;

export default userManagementReducer.reducer;