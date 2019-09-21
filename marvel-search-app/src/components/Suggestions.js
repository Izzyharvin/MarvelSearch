import React from 'react'
import "./Suggestions.css";

const Suggestions = (props) => {
    const options = props.results.map(hero => (
        <div className="suggest">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div className="hero-name" key={hero.id}>
                            {hero.name}
                        </div>
                        <div>
                            <a href="">
                                <img className="hero-thumbnail" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero-thumbnail" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    ))
    return <ul>{options}</ul>
}

export default Suggestions