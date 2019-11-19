import React from 'react'
import Radium from 'radium'
import './Car.css'

const Car = props => {
	// Создаем динамический класс. Реализация задачи с проверкой значений в строке.
	const inputClasses = ['input']
	// Проверяем если в props.name что-то лежит, строка не равна пустой строке, то будем добавлять
	// массив inputclasses
	if (props.name !== '' ) {
		inputClasses.push('green')
	} else {
		inputClasses.push('red')
	}

	// Проверка на длину и применения стиля 
	if (props.name.length > 4) {
		inputClasses.push('bold')
	}

	const style = {
		border: '1px solid #ccc',
		boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
		// В селектор в качестве значений передаем обьект. CSS - свойства состояния наведения мышки на елемент
		':hover': {
			border: '1px solid #aaa',
			boxShadow: '0 4px 15px 0 rba(0, 0, 0, .25)',
			cursor: 'pointer'
		}
	} 
	// Добавляем в компонент тело ф-ции return 
	return (
	// задаем рамку, для того чтобы отличать каждый елемент машины от другой
	<div className = "Car" style = {style}>
	<h3>Car: {props.name}</h3>
	<h4>Model: {props.model}</h4>
	<p>Year: <strong>{props.year}</strong></p>
	{/* Задаем input с полем текст, и событие OnChange. Будем передавать свойство смены имени машины*/}
	{/* Даному input задаем знач. по умол. value и параметром передаем props.name*/}
	<input  
		type="text" 
		onChange = {props.onChangeName} 
		value = {props.name}
		// Передаем елементы друх массивов(green|red) через className
		// Превращаем массив в строку с помощью м-да join
		className = {inputClasses.join(' ')}
	/>
	{/* Будем вызывать м-д onDelete */}
	<button onClick = {props.onDelete}>Delete</button>
	</div>)
}

export default Radium(Car)