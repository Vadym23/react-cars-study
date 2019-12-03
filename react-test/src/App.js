// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import '.index.css';
// import registerServiceWorker from '.registerServiceWorker';
// // import logo from './logo.svg';
import React, { Component } from 'react'
import './App.scss'
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/counter'

class App extends Component {
  
  // инициализируем State через м-д конструктор наследованым от компонента
  constructor(props) {
    super(props)
    this.state = {
      cars: [
        {name: 'Ford', model: 'Focus', year: 2018},
        {name: 'Audi', model: 'A6', year: 2016},
        {name: 'Mazda', model: 'RX7', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }
  
  toggleCarsHandler = () => {
      this.setState ({
      showCars: !this.state.showCars
    })
  }

  // Удалили м-д changeTitleHandler и записуем новый м-д onChangeName
  onChangeName(name, index) {
    // Изменяем название нужной нам машины. Созд. перем. car, которая будет определятся из поля state, массив
    // cars и по index(тоесть находим нужную нам машину)
    const car = this.state.cars[index]
    // Изменяем поле car.name на ее новое имя name
    car.name = name
    // Мы получили новую машину и нам необходимо получить состояние данной машины. Напрямую мы не можем менять 
    // состояние. Для этого мы сосдаем переменную cars и дублируем(клонируем) массив cars. Получаем дублированный
    // массив и в последствии можем его изменить
    // const cars = this.state.cars.concat()
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState(
      // Так как мы хотим изменить массив cars то cars равно cars. Можно упростить запись на cars(JS понимает)
      {cars: cars}
    )
  }

  // Создаем м-д deleteHandler и пробуем изменить состояние машин через вызов м-да concat()
  deteleHandler(index) {
    const cars = this.state.cars.concat()
    // Дальше удаляем елемент через м-д splice(). 1-м передаем index, 2-м к-ство елем. для удаления
    cars.splice(index, 1)
    // Обращаемся к м-ду this.setState и переопределить массив cars уже с удал. елементом
    this.setState({cars})
  }

  // Жизненные циклы
  // 1-й жизненный цикл
  componentWillMount(){
    console.log('App componentWillMount')
  }

  // 2-й жизненный цикл
  componentDidMount(){
    console.log('App componentDidMount')
  }

  // 3-й жизненный цикл м-д .render()
  render() {
    console.log('App render()')

    // Емуляция ошибки
    // if (Math.random() > 0.7) {
    //   throw new Error('Car random failed')
    // }

    const divStyle = {
      textAlign: 'center'
    }
    
    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key = {index}>
          <Car 
          name = {car.name}
          year = {car.year}
          index = {index}
          // Передаем ф-цию this.deleteHandler и будем передавать с помоцью м-да bind контекст и index той
          // машины которую необходимо удалить
          onDelete = {this.deteleHandler.bind(this, index)}          
          // Вместо параметра onChangeTitle будем передавать параметр onChangeName и вызывать м-д onChangeName
          // В даную callback ф-цию будем принимат ивент и передавать 1-м параметром, 2-м параметром index той 
          // машины котурую нужно изменить, который берется из м-да map
          onChangeName = {event => this.onChangeName(event.target.value, index)}
          />
          </ErrorBoundary>
        )
      }) 
    }

    return (
      <div style = {divStyle}>
      {/* <h1>{this.state.pageTitle}</h1> */}
      <h1>{this.props.title}</h1>

      <Counter/>
      <hr/>
      {/* <div className = {classes.Car} style = {style}> */}
      <button 
        className = {'AppButton'} 
        style = {{
          marginTop: '20px',
          padding: '8px 10px',
          bottom: '1px solid #ccc',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          outLine: 'none',
          backgroundColor: '#f0ff1e'
        }}
        onClick = {this.toggleCarsHandler} 
      >Toggle cars</button>
       {/* Добавили блок и стилизовали */}
        <div style = {{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>
      </div>
      );

  }
}

export default App;




