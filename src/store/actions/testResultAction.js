import { testResult, sendTestResult, testResultUpload, updateTestResult } from '../reducers/testResultReducer';
import { displayAlert } from '../reducers/testResultReducer'

export function addTestResultAction(data) {
	return async dispatch => {
		dispatch(testResult(data))
	}
}

export function updateTestResultAction(data, state ) {
	return async dispatch => {
      if(state.selectedResults.length > 0){
		   dispatch(updateTestResult(data))
		   dispatch(displayAlert({ openAlert: true, alertSeverity: 'success', alertMessage: "Result sended successfully" }))
		}
		else{
			dispatch(displayAlert({ openAlert: true, alertSeverity: 'success', alertMessage: "Please select one or more test result to send" }))
		}
	}
}

export function addTestResultUploadAction(data) {
	return async dispatch => {
		dispatch(testResultUpload(data))
	}
}
