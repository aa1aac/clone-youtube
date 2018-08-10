import React, { Component } from 'react';
import './App.css';
import SearchBar from './component/search_bar';
import YTSearch from 'youtube-api-search';
let api='AIzaSyBF5StKJDolrs0UJCqE2k5aJj-o5uncdCA';
YTSearch({key:api, term:'surfboards'},(data)=>{console.log(data)});
class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}
export default App;
