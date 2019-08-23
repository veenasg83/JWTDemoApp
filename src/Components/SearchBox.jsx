
import React, { Component } from 'react';

class SearchBox extends Component {

    render() {
        console.log("sb" + this.props.value);
        return (

            <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                value={this.props.value}
                onChange={e => this.props.onChange(e.currentTarget.value)}
            />

        );
    }
}

export default SearchBox;