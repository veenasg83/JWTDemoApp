import React, { Component } from 'react';
import AddCustomer from './AddCustomer.jsx';
import $ from 'jquery';
import SearchBox from './SearchBox.jsx';
import Cookies from 'js-cookie';
class Books extends Component {

    state = {
        customers: [],
        showAddForm: false,
        newCustomer: {},
        searchQuery: '',
        filtered: []

    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: "https://localhost:44372/api/customer",
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'content-Type': 'application/json'
            },
            type: "GET",
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                this.setState({
                    customers: data,
                    filtered: data
                });

            }.bind(this),
            error: function (error) {
                console.log(error);
            }.bind(this)
        })

    }

    openEdit = (customer) => {
        this.setState({
            showAddForm: true,
            newCustomer: customer
        })
        console.log("edit" + customer);
    }

    handleAdd = () => {
        this.setState({
            showAddForm: true
        })
    }


    handleAddCustomer = (customer) => {
        $.ajax({
            url: "https://localhost:44372/api/customer/createcustomers",
            type: "POST",
            data: JSON.stringify(customer),
            contentType: 'application/json',
            success: function (res) {
                console.log(res);

            }.bind(this),
            error: function (error) {
                console.log(error);
            }.bind(this)
        })
        this.loadData();
    }

    handleSearch = (query) => {
        console.log("q" + query);
        let filtered = { ...this.state.customers };
        filtered = this.state.customers.filter(c => c.name.toLowerCase().startsWith(query.toLowerCase()));
        //console.log(query.toLowerCase());
        console.log(filtered);
        this.setState({ filtered, searchQuery: query });


    }


    render() {
        return (
            this.state.showAddForm ? this.renderAdd() : this.renderDisplay()
        )
    }
    renderDisplay() {
        const { customers, searchQuery, filtered } = this.state;
        return (
            <React.Fragment>

                <div className="container">
                    <button
                        className="btn btn-primary"
                        onClick={this.handleAdd}
                    >Add customers </button>
                    <SearchBox value={searchQuery} onChange={this.handleSearch} />

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Level</th>
                                <th scope="col">Country</th>
                                <th scope="col">Control Point</th>
                                <th scope="col">Set Number</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Email</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(customer => (
                                <tr key={customer.id}>
                                    <td>{customer.name} </td>
                                    <td>{customer.level} </td>
                                    <td>{customer.country} </td>
                                    <td>{customer.controlPoint} </td>
                                    <td>{customer.setNumber} </td>
                                    <td>{customer.contact} </td>
                                    <td>{customer.email} </td>
                                    <td> <button className="btn btn-primary" onClick={() => this.openEdit(customer)}> Edit </button> </td>
                                    <td><div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                                        <label className="custom-control-label" htmlFor="defaultUnchecked"></label>

                                    </div>
                                    </td>

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
            <AddCustomer customer={this.state.newCustomer} addCustomer={this.handleAddCustomer} />
        )

    }
}

export default Books;