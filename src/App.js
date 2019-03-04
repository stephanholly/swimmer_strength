import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'


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


  dropdownToggle = () => {
    var x = document.getElementById("dropdown-container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  dropdownMenuClose = () => {
    var x = document.getElementById("dropdown-container");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
  }

  render() {
    return (
      <Router>
      <div className="App">
        <header className="header">
          <div className="logo">
            <img className="media-object" src='/images/swimmerstrength.png' alt="logo" />
          </div>
          <div className="headerlink"><Link to="/"><h2>Home</h2></Link></div>
          <div className="headerlink"><Link to="/about"><h2>About</h2></Link></div>
          <div className="headerlink"><Link to="/services"><h2>Services</h2></Link></div>
          <div className="headerlink"><Link to="/content"><h2>Content</h2></Link></div>
          <div className="headerlink"><Link to="/products"><h2>Products</h2></Link></div>
          <div className="headerlink"><Link to="/events"><h2>Events</h2></Link></div>
          <i id="fa-bars" className="fas fa-bars" onClick={()=> this.dropdownToggle()}></i>
        </header>
        <div id="dropdown-container" className="dropdown-container">
          <div className="dropdownlink" onClick={()=> this.dropdownMenuClose()}><Link to="/"><h2>Home</h2></Link></div>
          <div className="dropdownlink" onClick={()=> this.dropdownMenuClose()}><Link to="/about"><h2>About</h2></Link></div>
          <div className="dropdownlink" onClick={()=> this.dropdownMenuClose()}><Link to="/services"><h2>Services</h2></Link></div>
          <div className="dropdownlink" onClick={()=> this.dropdownMenuClose()}><Link to="/content"><h2>Content</h2></Link></div>
          <div className="dropdownlink" onClick={()=> this.dropdownMenuClose()}><Link to="/products"><h2>Products</h2></Link></div>
          <div className="dropdownlink" onClick={()=> this.dropdownMenuClose()}><Link to="/events"><h2>Events</h2></Link></div>
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
