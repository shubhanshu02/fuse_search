import logo from './logo.svg';
import './App.css';
import Fuse from 'fuse.js'
import { Container } from 'react-bootstrap';
import React, { Component } from 'react';
import choice from './choices.json';

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: [
    "title",
    "author.firstName"
  ]
};



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <input type="text" value={this.state.value} placeholder="Search" onChange={this.handleChange} style={{ width: "300px", height: "30px" }} />
            <Search pattern={this.state.value} />
          </Container>
        </header>
      </div>
    );
  }
}

function Search({ pattern }) {
  const fuse = new Fuse(choice, options);
  const t = fuse.search(pattern);
  const result = t.map(character => <p>{character.item.title}</p>);
  return <div>{result}</div>;
}
export default App;
