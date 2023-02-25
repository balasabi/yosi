import { createPatient } from '../reducers/patientReducer';

export function createPatientAction(data, state, setState) {
    return async dispatch => {
        dispatch(createPatient(data))
        setState({ ...state, isAdd: false })
    }
}