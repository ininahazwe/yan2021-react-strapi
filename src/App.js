import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './pages';
import About from "./pages/about";
import ScrollToTop from "./ScrollToTop";

function App() {
    const PageNotFound = () => (
        <div>404 !<Link to="/">Home</Link></div>
    )
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default App;