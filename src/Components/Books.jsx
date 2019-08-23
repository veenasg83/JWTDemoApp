import React, { Component } from 'react';
import AddBook from './AddBook.jsx';
import $ from 'jquery';
class Books extends Component {

    state = {
        books: [],
        showAddForm: false
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        $.ajax({
            url: "https://localhost:44372/api/books",
            type: "GET",
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                this.setState({ books: data });
                console.log(this.state.movies);
            }.bind(this),
            error: function (error) {
                console.log(error);
            }.bind(this)
        })

    }

    handleAdd = () => {
        this.setState({
            showAddForm: true
        })
    }


    render() {
        const { books, showAddForm } = this.state;

        return (
            <React.Fragment>
                {showAddForm ? this.renderAdd() : null}
                <div className="container">
                    <button
                        className="btn btn-primary"
                        onClick={this.handleAdd}
                    >Add Book </button>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">BookName</th>
                                <th scope="col">Price</th>
                                <th scope="col">Category</th>
                                <th scope="col">Action</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book => (
                                <tr key={book.id}>
                                    <td>{book.bookName} </td>
                                    <td>{book.price} </td>
                                    <td>{book.category} </td>
                                    <td><button>Edit</button> </td>
                                    <td><button>Delete</button> </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }

    renderAdd() {
        return (
            <AddBook />
        )

    }
}

export default Books;