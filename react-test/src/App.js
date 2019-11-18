// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import '.index.css';
// import registerServiceWorker from '.registerServiceWorker';
// // import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car.js';

class App extends Component {
  
  state = {
    cars: [
      {name: 'Ford', model: 'Focus', year: 2018},
      {name: 'Audi', model: 'A6', year: 2016},
      {name: 'Mazda', model: 'RX7', year: 2010}
    ],
    pageTitle: 'React components',
    showCars: false
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

  render() {
    const divStyle = {
      textAlign: 'center'
    }
    
    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car 
          key = {index}
          name = {car.name}
          year = {car.year}
          // Передаем ф-цию this.deleteHandler и будем передавать с помоцью м-да bind контекст и index той
          // машины которую необходимо удалить
          onDelete = {this.deteleHandler.bind(this, index)}          
          // Вместо параметра onChangeTitle будем передавать параметр onChangeName и вызывать м-д onChangeName
          // В даную callback ф-цию будем принимат ивент и передавать 1-м параметром, 2-м параметром index той 
          // машины котурую нужно изменить, который берется из м-да map
          onChangeName = {event => this.onChangeName(event.target.value, index)}
          />
        )
      }) 
    }

    return (
      <div style = {divStyle}>
      <h1>{this.state.pageTitle}</h1>


      <button onClick = {this.toggleCarsHandler} >Toggle cars</button>
        { cars }
      </div>
      );

  }
}

export default App;




