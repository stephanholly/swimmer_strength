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
import Blog from './components/Blog'
// import BlogPost from './components/BlogPost'
import TenDayFreeTrial from './components/TenDayFreeTrial'
import StartTrainingToday from './components/StartTrainingToday'





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  dropdownToggle = () => {
    var x = document.getElementById("dropdown-container");
    if (x.style.display === "block") {
      x.style.display = "none";
      this.setState({open:false});
    } else {
      x.style.display = "block";
      this.setState({open:true});
    }
  }

  dropdownMenuClose = () => {
    var x = document.getElementById("dropdown-container");
    if (x.style.display === "block") {
      x.style.display = "none";
      this.setState({open:false});
    }
  }

  render() {
    return (
      <Router>
      <div className="App">
        <header className="header">
        <Link to="/" className="logoLink">
          <div className="logo">
            <img className="media-object" src='/images/swimmerstrength.png' alt="logo" />
          </div>
        </Link>
          <div className="headerlink"><Link to="/"><h2>Home</h2></Link></div>
          <div className="headerlink"><Link to="/about"><h2>About</h2></Link></div>
          <div className="headerlink"><Link to="/services"><h2>Services</h2></Link></div>
          <div className="headerlink"><Link to="/content"><h2>Content</h2></Link></div>
          <div className="headerlink"><Link to="/products"><h2>Products</h2></Link></div>
          <div className="headerlink"><Link to="/events"><h2>Events</h2></Link></div>
          {!this.state.open ? <i id="fa-bars" className="fas fa-bars" onClick={()=> this.dropdownToggle()}></i> : <i id="fa-bars" className="fas fa-times" onClick={()=> this.dropdownToggle()}></i>}
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
          <Route path="/tenDayFreeTrial/" component={TenDayFreeTrial} />
          <Route path="/aztraining-mesa/" component={AzTrainingMesa}/>
          <Route path="/aztraining-tempe/" component={AzTrainingTempe}/>
          <Route path="/onlinetraining/" component={OnlineTraining} />
          <Route path="/campquestionnaire/" component={CampQuestionnaire} />
          <Route path="/workshopquestionnaire/" component={WorkshopQuestionnaire} />
          <Route path="/videos/" component={Videos} />
          <Route exact path="/blog/" component={Blog} />

          <Route path="/start-training-today/" component={StartTrainingToday}/>


      </div>
    </Router>
    );
  }
}

export default App;
