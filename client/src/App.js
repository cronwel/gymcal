import React, { Component } from 'react';
import './App.css';
import WorkoutInput from './components/WorkoutInput';
import Menu from './components/01-Menu/Menu';
import Workout from './components/03-Workouts/Workout';

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          GymCal
        </header>
      </div>
        <Menu />
        < WorkoutInput />
        <Workout />
        </>
    );
  }
}

export default App;
