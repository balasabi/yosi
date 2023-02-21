import { combineReducers } from '@reduxjs/toolkit';
import sessionReducer from "./sessionReducer";
import testResultReducer from "./testResultReducer";
import userManagementReducer from './userManagementReducer';
import countryReducer from './countryReducer';
import couponReducer from './couponReducer';
import appointmentReducer from './appointmentReducer';
import locationReducer from './locationReducer';

export const rootReducer = combineReducers({
    sessionReducer,
    testResultReducer,
    userManagementReducer,
    countryReducer,
    couponReducer,
    appointmentReducer,
    locationReducer
})

export default rootReducer;