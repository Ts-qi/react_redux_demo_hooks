import React from 'react'
import { connect } from 'react-redux';

const ItemContainer = (props)=> {
	return (
		<div>
			<h2>  item---{ props.item}</h2>
		</div>
	)
}
const mapStateToProps = ( state,ownProps) => {
	console.log(ownProps,'ownProps')
	const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
	return {
		item : itemState
	}
}

export default connect(mapStateToProps,null)(ItemContainer)