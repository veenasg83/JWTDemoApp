import React, { Component } from 'react';

class AddCustomer extends Component {

    state = {
        errors: '',
        customer: {
            name: this.props.customer.name || '',
            level: this.props.customer.level || '',
            country: this.props.customer.country || '',
            controlPoint: this.props.customer.controlPoint || '',
            setNumber: this.props.customer.setNumber || '',
            contact: this.props.customer.contact || '',
            email: this.props.customer.email || ''
        }
    }


    handleChange = (e) => {
        const customer = { ...this.state.customer };
        customer[e.target.name] = e.target.value;
        this.setState({ customer });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addCustomer(this.state.customer);
        window.location = '/';
    }


    render() {
        const { customer } = this.state;
        return (
            <div className="container">
                <h1> Add Customer </h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" className="form-control" name="name" onChange={this.handleChange} />
                        {this.state.errors && <div className="alert alert-danger">{this.state.errors}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="level">Level</label>
                        <select
                            className="form-control"
                            id="level"
                            name="level"
                            value={customer.level}
                            onChange={this.handleChange}
                        >
                            <option>Select</option>
                            <option>Central Bank</option>
                            <option>Commercial Bank</option>
                            <option>Fund</option>
                            <option>Fund Manager</option>
                            <option>Local Corporate</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                            className="form-control"
                            id="country"
                            name="country"
                            value={customer.country}
                            onChange={this.handleChange}
                        >
                            <option>Select</option>
                            <option>Australia</option>
                            <option>New Zealand</option>
                            <option>India</option>
                            <option>U.K.</option>
                            <option>Singapore</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="controlpoint">Control Point</label>
                        <select
                            className="form-control"
                            id="controlpoint"
                            name="controlpoint"
                            value={customer.controlPoint}
                            onChange={this.handleChange}
                        >
                            <option>Select</option>
                            <option>BUSBKVIC</option>
                            <option>CPMAUST</option>
                            <option>INSTAUS</option>
                            <option>BUSBKQLD</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="setno">Set Number</label>
                        <input id="setno" className="form-control" name="setno" onChange={this.handleChange} />
                        {this.state.errors && <div className="alert alert-danger">{this.state.errors}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="contact">Contact</label>
                        <textarea
                            className="form-control"
                            id="contact"
                            rows="3"
                            name="contact"
                            value={customer.contact}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="setno" className="form-control" name="email" onChange={this.handleChange} />
                        {this.state.errors && <div className="alert alert-danger">{this.state.errors}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit} > Submit</button>

                </form>
            </div>
        )
    }
}

export default AddCustomer;