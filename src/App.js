import logo from './logo.svg';
import './App.css';

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import React from 'react';
import Main from "./Main";
function App() {
    let setSubmittedText = "The Office";
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;

