import React, { Component } from 'react';
import './App.css';
import Menu from './components/01-Menu/Menu';
import { ReactComponent as Logo } from './resources/a_01_images/gymcal_logo.svg';
import Signup from './components/04-Frontpage/signup';
import Credits from './components/04-Frontpage/credits';
import Download from './components/04-Frontpage/download';
import Tagline from './components/04-Frontpage/tagline';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile:[],
    };
  }
  componentDidMount() {
    axios.get('api/v1/')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ profile: data }) });
  }
  render() {
    return (
      <div className="App">
        <Logo className="logoStyle" />
        <Tagline />
        <Menu />
        <Signup />
        <Credits />
        <Download />
      </div>
    );
  }
}

export default App;
