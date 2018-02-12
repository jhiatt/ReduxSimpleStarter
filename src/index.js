//core react library dealing with creating componants (incl jsx syntax)
//libraries imported don't need a path
import React, { Component } from 'react';
//library dealing with rendering the java scrip to the DOM
import ReactDOM from 'react-dom';
// SearchBar is the function named in the search_bar file.
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// import API_KEY from 'key.js'

const API_KEY = 'AIzaSyCDxHhXXv43QKieuFYblwVzqEOMvjqFCns';



//const is an ES6 syntax.  Like variable but constant, will not change.
  //we use const because the variable using the componant will not change (cannot change)
//ES6 is the latest version of javascript (technically known as ECMAScript)

//write the componant
//this is a class not an instance (can have many instances of App)
// const App = function() {
  //same as above using new es6 syntax, also changes 'this' so that you can add multiple fuctions within a constant
//downward date flow: the parent js file should fetch all the data and pass it down.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [], 
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos });
    });
  }

  render() {
    //not html actually jsx (uses javascript)
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} />
      </div>
      //passed videos in as an array
    );
  }
}
//translated to vanila js
// "use strict";
// var _temporalUndefined = {};
// var App = _temporalUndefined;

// App = function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hi!"
//   );
// };


//now we have to put the componant into the page
//have access through react when we ran NPM install, stored in node_modules, connected through the first import line above.
//This will create an instance of App, <App /> = <App></App> in the jsx
//need to say where to put it, in this case div with class containor is our root REACT node
ReactDOM.render(<App />, document.querySelector('.container'));
