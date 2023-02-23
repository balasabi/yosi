import { createTestType, updateTestType } from '../reducers/testTypeReducer';

export function createTestTypeAction(data) {
    return async dispatch => {
        dispatch(createTestType(data))
    }
}
export function updateTestTypeAction(data) {
    return async dispatch => {
        dispatch(updateTestType(data))
    }
}