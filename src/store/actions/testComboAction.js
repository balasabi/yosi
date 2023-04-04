import { createTestCombo, updateTestCombo , deleteTestComb} from '../reducers/testComboReducer';

export function createTestComboAction(data, state, setState) {
    return async dispatch => {
        dispatch(createTestCombo(data))
          
       
    }
}
export function updateTestComboAction(data, state, setState) {
    return async dispatch => {
        dispatch(updateTestCombo(data))
     }
}

export function removeItemFromTestComboAction(data, state, setState) {
    return async dispatch => {
        dispatch(deleteTestComb(data))
     }
}