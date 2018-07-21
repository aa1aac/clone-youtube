// checked 16

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
// create a new component. It should produce new components

const App=()=>{
     return (<div> 
      <SearchBar />
     </div>
);
}
ReactDOM.render(<App />, document.querySelector('.container'));