<<<<<<< HEAD
import _                    from "lodash";
import React, { Component } from "react";
import ReactDOM             from "react-dom";
import YTSearch             from "youtube-api-search";
import SearchBar            from "./components/search_bar";
import VideoList            from "./components/video_list";
import VideoDetail          from "./components/video_detail";

const API_KEY ='AIzaSyBF5StKJDolrs0UJCqE2k5aJj-o5uncdCA';

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
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} /> 
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} /> 
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
>>>>>>> a9b963d3237ecead92bc76afaf075db0fc82bbba
