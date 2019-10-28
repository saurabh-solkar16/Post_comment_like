import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login'
import Register from './components/register'
import Posts from './components/posts'
function App() {
  return (
    <Router>
    
            <Route exact path="/" component={Login} />
            <Route path="/posts" component={Posts} />
            <Route path="/register" component={Register} />
        
        </Router>
  );
}

export default App;
