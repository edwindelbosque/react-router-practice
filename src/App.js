import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Unicorn from './Unicorn';
import Shark from './Shark';
import Puppies from './Puppy';
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
        <Route exact path='/unicorns' component={Unicorn} />
        <Route exact path='/sharks' component={Shark} />
        <Route exact path='/puppies' component={Puppies} />
      </main>
    );
  }
}
