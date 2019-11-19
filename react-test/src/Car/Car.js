import React from 'react';
import './Car.css'

export default (props) => (
	// задаем рамку, для того чтобы отличать каждый елемент машины от другой
	<div className = "Car">
	<h3>Car: {props.name}</h3>
	<h4>Model: {props.model}</h4>
	<p>Year: <strong>{props.year}</strong></p>
	{/* Задаем input с полем текст, и событие OnChange. Будем передавать свойство смены имени машины*/}
	{/* Даному input задаем знач. по умол. value и параметром передаем props.name*/}
	<input type="text" onChange = {props.onChangeName} value = {props.name}/>
	{/* Будем вызывать м-д onDelete */}
	<button onClick = {props.onDelete}>Delete</button>
	</div>)