import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
const apiKey = 'Y8s6dW3uAs-TZ34YRekghk7llJxJuj3JjNAcLtADi-OZ02Dl66_soagZHv-eTyQFHC8fGWfxblXrZxyW3msB1GARItcv2KG0qhzgowweVi4qxdw3fijzXeIyKKd2XXYx';
const searchRequest = {
  term:'ice cream',
  location: 'Alpharetta'
};

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

    const access_token = apiKey;

let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + access_token);

fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=bars&limit=50&location=New York", {
  headers: myHeaders 
}).then((res) => {
  return res.json();
}).then((users) => {
  console.log(users);
});


  }


  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { shops, searchField } = this.state;
    const filteredshops = shops.filter(shop =>
      shop.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>shops list</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList shops={filteredshops} />
      </div>
    );
  }
}

export default App;
