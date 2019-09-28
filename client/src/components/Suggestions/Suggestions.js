import React from 'react'
import "./Suggestions.css";


const Suggestions = (props) => {
    const options = props.results.map(hero => (
        // <div className="column">
        //     <div className="card">
        //         <div className="card-header" key={hero.id}>{hero.name}</div>
        //         <div className="card-body"><img className="hero-thumbnail" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero-thumbnail" /></div>
        //         <div className="card-footer"><a href={`${hero.urls[0].url}`} className="btn btn-info" role="button">Link Button</a></div>
        //     </div>
        // </div>

        <div className="media">
            <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} className="mr-3" alt="hero-thumbnail"/>
            <div className="media-body">
            <h5 className="mt-0" key={hero.id}>{hero.name}</h5>
            {hero.description}
            <div className="link"><a href={`${hero.urls[0].url}`} className="btn btn-info" role="button">Comic Link</a></div>
            </div>
        </div>

    ))
    return <ul>{options}</ul>
}

export default Suggestions