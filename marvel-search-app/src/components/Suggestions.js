import React from 'react'
import "./Suggestions.css";


const Suggestions = (props) => {
    const options = props.results.map(hero => (
        <div className="column">
            <div class="card">
                <div class="card-header" key={hero.name}>{hero.name}</div>
                <div class="card-body"><img className="hero-thumbnail" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero-thumbnail" /></div>
                <div class="card-footer"><a href={`${hero.urls[0].url}`} class="btn btn-info" role="button">Link Button</a></div>
            </div>
        </div>

    ))
    return <ul>{options}</ul>
}

export default Suggestions