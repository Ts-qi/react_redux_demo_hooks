
const  redux  = require('redux'); 
const reduxLogger = require("redux-logger")

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware; // 中间件
const logger = reduxLogger.createLogger();
// constants.js
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
// action 
 function  buycake() {
	 return {
		 type:BUY_CAKE,
		 info: 'First redux action'
	 }
 }
function buyIcecream() {
	return {
		type: BUY_ICECREAM,
		info: 'First buy icecream'
	}
}


//  reducers.js   API : (previousState, action)=>  newState
// const initialState = {
// 	numOfCakes: 10,
// 	numOfIceCreams : 20
// }
const initailCakeState = {
	numOfCakes : 10
}
const initailIceCreamState = {
	numOfIceCreams: 20
}
const cakeReducer = (state = initailCakeState, action ) => {
	switch(action.type) {
		case BUY_CAKE: 
			return {
				...state,
				numOfCakes: state.numOfCakes -1
			}
		default:
			return state;
	}
}
const iceCreamReducer = (state = initailIceCreamState, action ) => {
	switch(action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 2
			}
		default:
			return state;
	}
}

// combine reducers 
 const rootReducers =  combineReducers({
	 cake: cakeReducer,
	 inCream: iceCreamReducer
 })

 // middleWare;

// store 

const store = createStore(rootReducers,applyMiddleware(logger))

const unsbscrible = store.subscribe(()=> {});

// store.dispatch(buycake())
// store.dispatch(buycake())
// store.dispatch(buycake())
// store.dispatch(buyIcecream())
// store.dispatch(buyIcecream())
// store.dispatch(buyIcecream())
console.log('initailState',store.getState())
unsbscrible()