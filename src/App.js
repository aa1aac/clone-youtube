// checked 32
import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import SearchBar from './component/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';
let api='AIzaSyBF5StKJDolrs0UJCqE2k5aJj-o5uncdCA';
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
        videos: [],
        selectedVideo: null
    };
    this.videoSearch("violin instrumental");
}
videoSearch(term) {
    YTSearch({key: api, term: term}, (videos) => {
        this.setState({ 
            videos: videos,
            selectedVideo: videos[0]
        });
    });
}
  render() {
    const videoSearch= _.debounce((term)=>{this.videoSearch(term) },300)
    return (
      <div className="App">
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/> 
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo=>({selectedVideo})}/>
      </div>
    );
  }
}
export default App;


