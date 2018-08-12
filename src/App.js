// checked 27
import React, { Component } from 'react';
import './App.css';
import SearchBar from './component/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './component/video_list';
let api='AIzaSyBF5StKJDolrs0UJCqE2k5aJj-o5uncdCA';
class App extends Component {
  constructor(props){
    super (props);
    this.state={
      videos:[],
    }
    YTSearch({key:api, term:'surfboard'},(videos)=>{
      this.setState=({ videos });
    });
    

  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
export default App;


