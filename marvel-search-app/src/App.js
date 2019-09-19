// import ReactDOM from "react-dom";
import React, {Component} from 'react';
import './App.css';


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
    fetch(`https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=cde74825b051f73f560e3fbda220c6a9&hash=43b5fe08ed53028010417a0edce88540&offset=${offset}`)
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
        // console.log(error)
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
    // const filteredHeros = heros.filter(heros => {
    //   if (heros.name.indexOf(this.state.keyword) !== -1) {
    //     return heros
    //   }
    // })
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
        
          {heros.map(hero => (
            <div className="hero-thumbnail" key={hero.name}>
              {hero.name}
              {/* {filteredHeros.map(hero => {
                <div></div>
              }) }*/
              }
                <br></br>
              <img className="hero-thumbnail" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero-thumbnail"/>
            </div>
          ))}
          

          <div className="button">
            <button onClick={() => this.ajaxCall(this.state.offset - 5)}>Previous Page</button>
            <button onClick={() => this.ajaxCall(this.state.offset + 5)}>Next Page</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
