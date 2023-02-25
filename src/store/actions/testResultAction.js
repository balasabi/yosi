import { testResult, sendTestResult } from '../reducers/testResultReducer';

export function addTestResultAction(data) {
	return async dispatch => {
		dispatch(testResult(data))
	}
}

export function sendResultAction( state ) {
	return async dispatch => {
		console.log("*****"+JSON.stringify(state.alert))
		dispatch(sendTestResult( state.alert))
		
	}
}

