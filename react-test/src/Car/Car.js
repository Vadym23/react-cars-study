import React from 'react';

// 1-st way
// function car() {
// 	returt (
// 		<div>This is component</div>
// 		)
// }

// 2-nd way
// const car = () => {
// 	return (
// 		<div>This is component</div>
// 	)
// }

// 3-rd way
// const car = () => (<div>
// 	This is component
// 	<strong>test</strong>
// 	</div>)

export default (props) => (<div>
	<h3>Car: {props.name}</h3>
	<h4>Model: {props.model}</h4>
	<p>Year: <strong>{props.year}</strong></p>
	<button onClick = {props.onChangeTitle}>Change</button>
	</div>)