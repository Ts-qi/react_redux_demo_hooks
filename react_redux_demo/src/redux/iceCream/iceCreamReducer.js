import { BUY_ICECREAM } from './iceCreamTypes'

const initailState = {
	numOfIceCreams : 20
}

const iceCreamReducer = (state = initailState, action) => {
	switch(action.type) {
		case BUY_ICECREAM: 
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams -2
			}
		default:
			return state;
	}
}
export default iceCreamReducer;