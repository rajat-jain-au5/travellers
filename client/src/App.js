import React from 'react';

import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Home'
import Dashboard from './Components/Dashboard';
import {loadUser} from './actionCreators/authAction'
import store from "./reducer/index";
import searchResults from './Components/searchResults';
import Cart from './Components/Cart'
import Order from './Components/Order'
import Protected from './Components/Private'
import Activity from './Components/Activity'
class App extends React.Component {
  componentDidMount = () => {
    store.dispatch(loadUser());
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Protected path="/dashboard" exact component={Dashboard} />
            <Protected path="/searchresults" exact component={searchResults}/>
            <Protected path="/cart" exact component={Cart}/> 
            <Protected path ="/order" exact component={Order}/>
            <Protected path="/activity" exact component={Activity}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
