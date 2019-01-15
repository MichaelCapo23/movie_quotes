import React, {Component} from 'react';

class movieList extends Component {
    isPrivate = this.props.match.params.type === 'private';


    render() {
        console.log("Is Private", this.isPrivate);
        return(
            <div>
                <h1 className="center">
                <div className={"grey-text"}>{this.isPrivate && <small>Private</small>}</div>
                Movie List
                </h1>
            </div>
        )
    }
}

export default movieList;


