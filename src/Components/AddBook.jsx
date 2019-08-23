import React, { Component } from 'react';
import $ from 'jquery';

class AddBook extends Component {

    state = {
        book: {
            name: '',
            price: 0,
            category: ''
        }

    }

    handleChange = e => {
        const book = { ...this.state.book };
        book[e.currentTarget.name] = e.currentTarget.value;
        this.setState({
            book
        })
    }

    render() {
        const { book } = this.state;
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="bookName">BookName:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="bookName"
                            value={book.name}
                            name="name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="price">Price:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            value={book.price}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="category">Category:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category"
                            name="category"
                            value={book.category}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>)
    }

}

export default AddBook;