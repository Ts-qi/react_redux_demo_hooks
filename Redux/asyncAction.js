
const redux = require('redux');
const axios = require('axios');
const createStore  = redux.createStore;
const applyMiddleWare = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const initialState = {
	loading: false,
	users: [],
	error:' '
}

// constants 
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUserRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	}
}
const fetchUserSuccess = users => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	}
}
const fetchUserFailure = error => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	}
};
const reducer = (state = initialState, action ) =>  {
	switch (action.type) {
		case FETCH_USERS_REQUEST: 
			return {
				...state,
				loading: true
			}
		case FETCH_USERS_SUCCESS: 
			return {
				loading: false,
				users: action.payload,
				error:''
			}
		case FETCH_USERS_FAILURE:
			return {
				loading: false,
				users: [],
				error: action.payload
			}
	}
}

const fetchUsers =()=> {
	return (dispatch)=> {
		dispatch(fetchUserRequest())
		axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
			// res.data is the array users
			const id = res.data.map( user => user.id)
			dispatch(fetchUserSuccess(id))
		})
		.catch( error => {
			// error message is error description
			dispatch(fetchUserFailure(error.message))
		})
	}
}
const store = createStore(reducer,applyMiddleWare(thunkMiddleware))
store.subscribe( ()=> console.log('initail state', store.getState()))
store.dispatch(fetchUsers())
// redux 的流程 
// page  dispatch ------> action -----> 去到 reducer -----> 修改值后在去到 state ------> 在此渲染到 page 