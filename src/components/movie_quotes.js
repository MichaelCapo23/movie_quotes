import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';

class MovieQuote extends Component {
    render() {
        return (
            <div className="center">
                <h1>Movie Quote</h1>
                <h5>Movie Quote: You had me at vape juice</h5>
            </div>
        )
    }
}

export default MovieQuote;