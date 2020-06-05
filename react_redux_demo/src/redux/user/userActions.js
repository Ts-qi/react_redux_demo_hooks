import {
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_FAILURE
} from './userTypes'
import axios from 'axios';
export const fetchUserRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	}
}
export const fetchUserSuccess = users => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	} 
}
export const fetchUserFailure = error => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	}
};

export const fetchUsers =()=> {
	return (dispatch)=> {
		dispatch(fetchUserRequest())
		axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
			// res.data is the array users
			dispatch(fetchUserSuccess(res.data))
		})
		.catch( error => {
			// error message is error description
			dispatch(fetchUserFailure(error.message))
		})
	}
}