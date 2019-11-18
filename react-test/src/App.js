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

  changeTitleHandler = pageTitle => {
    this.setState({
      pageTitle
    })
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
          onChangeTitle = {() => this.changeTitleHandler(car.name)}
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


