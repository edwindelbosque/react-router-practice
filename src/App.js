import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Creatures from './Creatures';
import CreatureDetails from './CreatureDetails';
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
        <Route exact path='/:type' render={({ match }) => {
          const { type } = match.params;
          const creaturesData = [
            ...unicornData,
            ...puppyData,
            ...sharkData]
            .filter(creature => creature.type === type)
          return (< Creatures data={creaturesData} />)
        }} />

        <Route exact path='/:type/:id' render={({ match }) => {
          const { id, type } = match.params;
          const creatureInfo = [
            ...unicornData,
            ...puppyData,
            ...sharkData]
            .filter(creature => creature.type === type)
            .find(creature => creature.id === parseInt(id));
          return (
            <CreatureDetails {...creatureInfo} />
          )
        }} />
      </main>
    );
  }
}
