// imput will triger API call
import React, { Component } from 'react';
// file now recognizes Component

//class based component whenever you need a comp. to be able to be introspective
//child class of React
//render required, must return jsx as well.
//class based components have "state", functional comp. do not
class SearchBar extends Component {
  //first fuction automatically called when new instance of class created
  constructor(props) {
    //super jumps to parent class, ie React.Component
    super(props);

    //this is where the value of the (input) variable is saved
    //creating state variable in constructor?
    this.state = { term: '' };
  }

  render() {
    // return <input onChange={this.onInputChange} />
    //must use setState to inform react that state has changed, trigers background functionality
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    ); 
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

//common naming convention
//event object created by the change (built in properties, target, value, etc)
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}


// tells the other files what to search for
export default SearchBar;