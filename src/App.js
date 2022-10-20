import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import './App.css';
import React from "react";
import Login from './Login';
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import store from './store';
import axios from "axios";
import AddUser from "./AddUser";

function App() {
  
  // const {isAuthenticated, user} = useSelector((state) => state.user);

  
  return (
  
    <Router>
      {/* {isAuthenticated && <Login user = {user}/>} */}
      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/add" element={<AddUser/>}/>
      </Routes>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
