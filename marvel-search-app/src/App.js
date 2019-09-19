// import ReactDOM from "react-dom";
import React, {Component} from 'react';
// import List from "./List";
import './App.css';
// import Heros from "./Heros";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      heros: [],
      offset: 0
    };
  }

  componentDidMount() {
    this.ajaxCall(0)
  }

  ajaxCall = offset => {
    fetch(`https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=cde74825b051f73f560e3fbda220c6a9&hash=43b5fe08ed53028010417a0edce88540&offset=${offset}`)
    .then(res => res.json())
    .then(
      (heros) => {
        // console.log(results)
        this.setState({
          isLoaded: true,
          heros: heros.data.results,
          offset
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
          offset
        });
      }
    )
  }

  render() {
    const {error, isLoaded, heros} = this.state;
    if(error) {
      return <div>Error: {error.message}</div>; 
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className="App">
          <input placeholder="Search..."/>
          <ul>
            {heros.map(hero => (
              <li key={hero.name}>
                {hero.name} <br></br>
                {/* {hero.thumbnail.path}.{hero.thumbnail.extension} */}
              </li>
            ))}
          </ul>
          <button onClick={() => this.ajaxCall(this.state.offset - 100)}>Previous Page</button>
          <button onClick={() => this.ajaxCall(this.state.offset + 100)}>Next Page</button>
        </div>
      );
    }
  }
}

export default App;
