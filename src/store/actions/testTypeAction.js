import { createTestType, updateTestType, createCategory, updateCategory, createClassification, updateClassification, deleteTestType } from '../reducers/testTypeReducer';

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

export function createCategoryAction(data) {
    return async dispatch => {
        dispatch(createCategory(data))
    }
}
export function updateCategoryAction(data) {
    return async dispatch => {
        dispatch(updateCategory(data))
    }
}

export function createClassificationAction(data) {
    return async dispatch => {
        dispatch(createClassification(data))
    }
}
export function updateClassificationAction(data) {
    return async dispatch => {
        dispatch(updateClassification(data))
    }
}
export function removeTestTypeAction(data) {
    return async dispatch => {
        dispatch(deleteTestType(data))
    }
}