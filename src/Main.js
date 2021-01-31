import logo from './logo.svg';
import './App.css';

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import React, {Component} from 'react';
import ShowTable from "./ShowTable";
import { useState } from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {

    constructor(props){
        super(props);

        this.state = {

            searchFieldValue : ""
        }
    }
    componentDidMount() {
    }
    handleSearchFieldValue =(e)   => {
        console.log('handleSearchFieldValue ' + e.target.value);
        this.setState({searchFieldValue : e.target.value});
        return( <ShowTable search = {e.target.value}/>);

    }

    render() {
        let setSubmittedText = "The Office";
        return (
            <div className="App">
                <div className="show-search">

                    <TextField
                        onChange={this.handleSearchFieldValue}
                        aria-label="Search"
                        id="searchtext"
                        defaultValue=""
                        label="search show titles"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />

                </div>
                <ShowTable/>


            </div>
        );
    }


}



export default Main;

