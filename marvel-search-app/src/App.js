// import ReactDOM from "react-dom";
import React, { Component } from 'react';
import './App.css';
import Ironman from "./img/ironman.png";
import Spiderman from "./img/spider-man.png";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      heros: [],
      offset: 0,
      footer: []
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
    const { error, isLoaded, heros } = this.state;
    // const filteredHeros = heros.filter(heros => {
    //   if (heros.name.indexOf(this.state.keyword) !== -1) {
    //     return heros
    //   }
    // })
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div className="loading">Loading...</div>;
    }
    else {
      return (
        <div className="App">
          <div className="pimg1">
            <div className="ptext">
              <span className="border">
                Welcome to Marvel Search
              </span>
            </div>
            <div>
              <img src={Ironman} className="ironman" alt="ironman"/>
            </div>
          </div>

          <section className="section section1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem, vitae quos, quasi eum harum recusandae
            ullam eos neque quia voluptates ipsam, ipsum nesciunt illo nihil ratione distinctio dolorum! Molestias!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum nam beatae eos, cupiditate delectus
            rem qui facere. Vel vitae harum praesentium minima distinctio, qui dicta obcaecati reprehenderit cumque
            adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere voluptatem mollitia, porro
            earum incidunt fugit nisi. Temporibus doloribus sed, quidem at fugit vero et in accusamus nihil delectus reprehenderit.</p>
          </section>

          <div className="pimg2">
            <div className="ptext">
              <span className="border">
                Super Heroes
              </span>
            </div>
            <div>
              <img src={Spiderman} className="spider-man" alt="spider-man"/>
            </div>
          </div>

          <section className="section section2">
            {heros.map(hero => (
              <div className="hero-thumbnail" key={hero.name}>
                {hero.name}
                {/* {filteredHeros.map(hero => {
              <div></div>
            }) }*/
                }
                <br></br>
                <a href="">
                  <img className="hero-thumbnail" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero-thumbnail"/>
                </a>
              </div>
            ))}

            <div className="button">
              <button className="previous-page" onClick={() => this.ajaxCall(this.state.offset - 5)}>Previous Page</button>
              <button className="next-page" onClick={() => this.ajaxCall(this.state.offset + 5)}>Next Page</button>
            </div>
          </section>

          <div className="pimg3">
            <div className="ptext">
              <span className="border">
              © 2019 MARVEL, Data provided by Marvel.
              </span>
            </div>
          </div>

          {/* <input className="search-bar" placeholder="Search..."/> */}


        </div>
      );
    }
  }
}

export default App;
