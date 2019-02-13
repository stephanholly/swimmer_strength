import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Content from './components/Content';
import Services from './components/Services';
import Products from './components/Products';
import Events from './components/Events';
import Registration from './components/Registration'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="header">
          <div className="logo">
            <img className="media-object" src='/images/swimmerstrength.png' alt="logo" />
          </div>
          <div className="headerlink">
            <Link to="/"><h2>Home</h2></Link>
          </div>
          <div className="headerlink">
            <Link to="/about"><h2>About</h2></Link>
          </div>
          <div className="headerlink">
            <Link to="/services"><h2>Services</h2></Link>
          </div>
          <div className="headerlink">
            <Link to="/content"><h2>Content</h2></Link>
          </div>
          <div className="headerlink">
            <Link to="/products"><h2>Products</h2></Link>
          </div>
          <div className="headerlink">
            <Link to="/events"><h2>Events</h2></Link>
          </div>
        </div>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/content/" component={Content} />
          <Route path="/services" component={Services} />
          <Route path="/products/" component={Products} />
          <Route path="/events/" component={Events} />
          <Route path="/registration/" component={Registration} />
      </div>
    </Router>
    );
  }
}

export default App;
