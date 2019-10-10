import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Creatures from './Creatures';
import unicornData from './data/unicorn-data';
import Home from './Home';
import puppyData from './data/puppy-data';
import sharkData from './data/shark-data';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <NavLink exact to='/' className='nav'>Home</NavLink>
          <NavLink exact to='/unicorns' className='nav'>Unicorns</NavLink>
          <NavLink exact to='/puppies' className='nav'>Puppies</NavLink>
          <NavLink exact to='/sharks' className='nav'>Sharks</NavLink>
        </header>
        <Route exact path='/' component={Home} />
        <Route exact path='/sharks' render={() => <Creatures data={sharkData} />} />
        <Route exact path='/puppies' render={() => <Creatures data={puppyData} />} />
        <Route exact path='/unicorns' render={() => <Creatures data={unicornData} />} />
      </main>
    );
  }
}
