import { createLocation, updateLocation } from '../reducers/locationReducer';

export function createLocationAction(data) {
    return async dispatch => {
        dispatch(createLocation(data))
    }
}
export function updateLocationAction(data) {
    return async dispatch => {
        dispatch(updateLocation(data))
    }
}