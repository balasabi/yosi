import { combineReducers } from '@reduxjs/toolkit';
import sessionReducer from "./sessionReducer";
import testResultReducer from "./testResultReducer";
import userManagementReducer from './userManagementReducer';
export const rootReducer = combineReducers({
    sessionReducer,
    testResultReducer,
     userManagementReducer
})

export default rootReducer;