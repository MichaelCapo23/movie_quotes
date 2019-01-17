import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getMovieQuote} from '../actions'

class MovieQuote extends Component {

    componentDidMount() {
        this.props.getMovieQuote();
    }

    render() {
        return (
            <div className="center">
                <h1>Movie Quote</h1>
                <h5>{this.props.quote}</h5>
                <div className="center">
                    <button className={"btn btn-large purple darken-2"} onClick={this.props.getMovieQuote}>new quote</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quote: state.movie.quote
    }
}

export default connect(mapStateToProps, {getMovieQuote})(MovieQuote);