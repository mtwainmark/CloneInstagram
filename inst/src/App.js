import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Feed from './Components/Feed';
import Profile from './Components/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
   <Router>
     <div className="App">
       <Header/>
       <Route path='/' component={Feed} exact/>
       <Route path='/profile' component={Profile} exact/>
     </div>
   </Router>
  );
}

export default App;
