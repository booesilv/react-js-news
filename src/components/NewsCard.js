import React, { Component } from 'react'

import './NewsCard.css'

class NewsCard extends Component {

    render() {

        const { title, text, picture, url } = this.props

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image news-img-container">
                    <img alt="" className="news-img" src={ picture } />
                    <span className="card-title">
                    </span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <div className="card-title">
                            { title }
                        </div>
                        <div className="news-data">
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ text }</span>
                            </p>
                        </div>
                        <div class="card-action">
                            <a href={ url } target="_blank"> Source</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default NewsCard