import React from 'react'
import "./Suggestions.css";


const Suggestions = (props) => {
    const options = props.results.map(hero => (
        <div className="column">
            <div className="hero">
                <div className="hero-name" key={hero.name}>
                    {hero.name}
                </div>
                <a href="">
                    <img className="hero-thumbnail" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero-thumbnail" />
                </a>
            </div>
        </div>

    ))
    return <ul>{options}</ul>
}

export default Suggestions