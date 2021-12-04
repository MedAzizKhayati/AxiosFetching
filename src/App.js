import './App.css';
import Home from './components/Home'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import User from './components/User';
import Post from './components/Post';
import UpdatePost from './components/UpdatePost';
function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/users" element={<Home/>}/>
          <Route exact path="/users/:id" element={<User/>}/>
          <Route exact path="/posts/:id" element={<Post/>}/>
          <Route exact path="/posts/:id/update" element={<UpdatePost/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
