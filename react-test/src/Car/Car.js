import React from 'react'
// import Radium from 'radium'
import classes from './Car.css'

class Car extends React.Component {

	componentWillReceiveProps(nextProps) {
		console.log('Car componentWillReceiveProps', nextProps)
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('Car shouldComponentUpdate', nextProps, nextState)
		return nextProps.name.trim() !==  this.props.name.trim()
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('Car componentWillUpdate', nextProps, nextState)
	}

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log('Car getDerivedStateFromProps', nextProps, prevState)
	// 	return prevState
	// }

	componentDidUpdate() {
		console.log('Car componentDidUpdate')
	}

	// getSnapshotBeforeUpdate() {
	// 	console.log('Car getSnapshotBeforeUpdate')
	// }

	componentWillUnmount() {
		console.log('Car componentWillUnmount')
	}

	render() {
		console.log('Car render')
	// Создаем динамический класс. Реализация задачи с проверкой значений в строке.
	const inputClasses = [classes.input]
	// Проверяем если в props.name что-то лежит, строка не равна пустой строке, то будем добавлять
	// массив inputclasses
	if (this.props.name !== '' ) {
		inputClasses.push(classes.green)
	} else {
		inputClasses.push(classes.red)
	}

	// Проверка на длину и применения стиля 
	if (this.props.name.length > 4) {
		inputClasses.push(classes.bold)
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
	<div className = {classes.Car} style = {style}>
	<h3>Car: {this.props.name}</h3>
	<h4>Model: {this.props.model}</h4>
	<p>Year: <strong>{this.props.year}</strong></p>
	{/* Задаем input с полем текст, и событие OnChange. Будем передавать свойство смены имени машины*/}
	{/* Даному input задаем знач. по умол. value и параметром передаем props.name*/}
	<input  
		type="text" 
		onChange = {this.props.onChangeName} 
		value = {this.props.name}
		// Передаем елементы друх массивов(green|red) через className
		// Превращаем массив в строку с помощью м-да join
		className = {inputClasses.join(' ')}
	/>
	{/* Будем вызывать м-д onDelete */}
	<button onClick = {this.props.onDelete}>Delete</button>
	</div>)
	}
}
// Radium
export default (Car)