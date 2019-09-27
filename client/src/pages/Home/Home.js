import React, { Component } from 'react';
import Suggestions from "../../components/Suggestions/Suggestions";
import Spiderman from "../../pictures/spider-man.png";
import "./Home.css";


const API_URL = `https://gateway.marvel.com/v1/public/characters`

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      offset: 0,
      query: '',
      results:[]
    };
  }

  componentDidMount() {
    this.ajaxCall(0)
  }

  ajaxCall = offset => {
    fetch(`${API_URL}?limit=5&ts=1&apikey=cde74825b051f73f560e3fbda220c6a9&hash=43b5fe08ed53028010417a0edce88540&offset=${offset}`)
      .then(res => res.json())
      .then(
        (results) => {
          // console.log(results)
          this.setState({
            isLoaded: true,
            results: results.data.results,
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

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2) {
          this.ajaxCall()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    const { error, isLoaded } = this.state;
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
          </div>

          <section className="section section1">
            <p>This is a Marvel app that currently lets you look through Marvel heroes. You can also click on the link button that will take you to the marvel website and show you the list of comics for that Hero.</p>
          </section>

          <div className="pimg2">
            <div className="ptext">
              <span className="border">
                Super Heroes
              </span>
            </div>
            <div>
              <img src={Spiderman} className="spider-man" alt="spider-man" />
            </div>
          </div>

          <section className="section section2">
            {/* <form>
              <input className="input"
                placeholder="Search for..."
                ref={input => this.search = input}
                onChange={this.handleInputChange}
              />
              <p>{this.state.query}</p>
              
            </form> */}
            <Suggestions results={this.state.results} />
            
            <br></br>

            <div className="button-container">
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
        </div>
      );
    }
  }
}

export default HomePage;
