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
import AzTrainingMesa from './components/AzTrainingMesa'
import AzTrainingTempe from './components/AzTrainingTempe'
import OnlineTraining from './components/OnlineTraining'
import CampQuestionnaire from './components/CampQuestionnaire'
import WorkshopQuestionnaire from './components/WorkshopQuestionnaire'
import Videos from './components/Videos'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="header">
          <div className="logo">
            <img className="media-object" src='/images/swimmerstrength.png' alt="logo" />
          </div>
          <div id="main-menu" className="main-menu" aria-label="Main menu">
            <a href="#main-menu-toggle"
               id="main-menu-close"
               className="menu-close"
               aria-label="Close main menu">
              <span className="sr-only">Close main menu</span>
              <span className="fa fa-close" aria-hidden="true"></span>
            </a>
              <div className="headerlink"><Link to="/"><h2>Home</h2></Link></div>
              <div className="headerlink"><Link to="/about"><h2>About</h2></Link></div>
              <div className="headerlink"><Link to="/services"><h2>Services</h2></Link></div>
              <div className="headerlink"><Link to="/content"><h2>Content</h2></Link></div>
              <div className="headerlink"><Link to="/products"><h2>Products</h2></Link></div>
              <div className="headerlink"><Link to="/events"><h2>Events</h2></Link></div>
          </div>
          <a href="#main-menu-toggle"
             className="backdrop"
             tabindex="-1"
             aria-hidden="true" hidden></a>
          <a href="#main-menu"
             id="main-menu-toggle"
             className="menu-toggle"
             aria-label="Open main menu">
            <span className="sr-only">Open main menu</span>
            <span className="fa fa-bars" aria-hidden="true"></span>
          </a>
        </div>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/content/" component={Content} />
          <Route path="/services" component={Services} />
          <Route path="/products/" component={Products} />
          <Route path="/events/" component={Events} />
          <Route path="/registration/" component={Registration} />
          <Route path="/aztraining-mesa/" component={AzTrainingMesa}/>
          <Route path="/aztraining-tempe/" component={AzTrainingTempe}/>
          <Route path="/onlinetraining/" component={OnlineTraining} />
          <Route path="/campquestionnaire/" component={CampQuestionnaire} />
          <Route path="/workshopquestionnaire/" component={WorkshopQuestionnaire} />
          <Route path="/videos/" component={Videos} />

      </div>
    </Router>
    );
  }
}

export default App;
