import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState(() => {
          return {monsters:users}
      }
      ))
  }

  // this is an optimization so we don't constatly create a new function in our component
  onSearchChange = (event) => {
    // we create a variable to lower case all the names in the monsters array
    const searchField = event.target.value.toLocaleLowerCase();
   
    // we update the filter monsters array to the DOM
    this.setState(() => {
      return {searchField}
    });
  }

  render() {
    // we will destruture our class methods and variables. Think of Python from math import pi sorta concept
    // we don't have to write the 'this' keyword 
    const {monsters, searchField} = this.state; 
    const {onSearchChange} = this;
    
    // we filter the monsters based off of string input in text field
          const filteredMonsters = monsters.filter((monster) => {
              // crate a new array with filtered monsters
              return monster.name.toLocaleLowerCase().includes(searchField);
          });

    return (
      <div className="App">
        
      <h1 class ="app-title">Monster Rolodex</h1>

        <SearchBox onChangeHandler={onSearchChange} placeholder = 'search monsters' className='monsters-search-box' />
        <CardList monster={filteredMonsters} />
      </div>
    );

  }

}

export default App;
