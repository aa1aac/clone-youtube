// checked 20

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from './youtube-search-api';
const App=()=>{
     return (<div> 
      <SearchBar />
     </div>
);
YTSearch({ key:api.API_KEY, term: 'board'}, function(data){
      console.log(data);
    });
  
//YTsearch({key:api.API_KEY, term:'surfboards'},(data)=>{console.log(data)});
ReactDOM.render(<App />, document.querySelector('.container'));