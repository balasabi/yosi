import { createPatient } from '../reducers/patientReducer';

export function createPatientAction(data, state, setState){
    console.log("*****"+JSON.stringify(data))
    return async dispatch => {
        dispatch(createPatient(data))
        setState({...state, isAdd:false })

        console.log("*****"+JSON.stringify(data))
    }
}