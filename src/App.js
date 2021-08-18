import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Create from './Create.js';
import SoupDetail from './SoupDetail.js';
import SoupList from './SoupList.js';
import Header from './Header.js';

class App extends Component {
  state = {  }
  render() { 
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={SoupList} />
            <Route path='/soups/:id' component={SoupDetail} />
            <Route path='/create' component={Create} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
 
export default App;