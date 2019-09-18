import React, {Component} from 'react';
// import './.ListItem.css';


class ListItem extends Component {
  render() {
    const sampleData = this.props.hero;
    const {thumbnail, urls} = sampleData;
    return(
      <div className="Hero">
        <div className="hero-thumbnail-container">
          <img className="hero-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`}/>
        </div>
        <div className="hero-data-container">
          <h1>{sampleData.name}</h1>
          {/* <p>Link: {urls[0].url}</p> */}
        </div>
      </div>
    );
  }
}

export default ListItem;