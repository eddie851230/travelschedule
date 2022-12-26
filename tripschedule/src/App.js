import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// 安裝icon、bootstrap、jquery
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
// import axios from "axois";

// 元件
import Home from './components/Home';
import Airticket from './components/Airticket';
import Spot from './components/Spot';
import Hotel from './components/Hotel';
import Schedule from './components/Schedule';
import MemberFavorite from './components/MemberFavorite';
import MemberSchedule from './components/MemberSchedule';
import Error from './components/Error';
import Navigation from './components/Navigation';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Home" component={Home} exact/>
            <Route path="/Airticket" component={Airticket} />
            <Route path="/Airticket/:id" component={Airticket} />
            <Route path="/Spot" component={Spot} />
            <Route path="/Spot/:id" component={Spot} />
            <Route path="/Hotel" component={Hotel} />
            <Route path="/Hotel/:id" component={Hotel} />
            <Route path="/Schedule" component={Schedule} />
            <Route path="/member/MemberFavorite" component={MemberFavorite} />
            <Route path="/member/MemberSchedule" component={MemberSchedule} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;