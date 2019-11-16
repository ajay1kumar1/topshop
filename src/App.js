import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';
import allVars from './sample';
class App extends Component {
  constructor() {
    super();

    this.state = {
      shops: [],
      searchField: ''
    };
  }

  componentDidMount() {
  /*  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ shops: users }));
      */
     this.setState({ shops: allVars })
  }


  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { shops, searchField } = this.state;
    const filteredshops = shops.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>shops Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList shops={filteredshops} />
      </div>
    );
  }
}

export default App;
