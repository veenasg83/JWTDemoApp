import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';
import LogIn from './Components/LogIn.jsx';
import Books from './Components/Books.jsx';
import Customer from './Components/Customer.jsx';
import NavBar from './Components/NavBar.jsx';

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <div className="App">
                <Switch>
                    <Route exact path='/login' component={LogIn} />
                    <Route path="/customer" component={Customer} />
                    <Route path="/books" component={Books} />
                    <Redirect from='/' exact to='/login' />
                </Switch>
            </div>
        </React.Fragment>
    );
}

export default App;
