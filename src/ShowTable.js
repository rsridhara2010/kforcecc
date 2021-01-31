import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import {List, ListItem, TextField} from "@material-ui/core";

import axios from 'axios';
import {Component} from 'react';
class ShowTable extends Component {
    state ={
        search:'',
        shows:[],
        showTable:false,
        objshow:[]
    }
    constructor(props) {
        super(props);
        this.getShows = this.getShows.bind(this);
    }
    renderShows(showdata){
        return (
            <div>
                <h1 id='title'>Show Table</h1>
            </div>
        )
    }
    async getShows(){
            let searchfor = document.getElementById('searchtext').value
            const apiUrl = 'https://api.tvmaze.com/search/shows?q='+searchfor;
            console.log(apiUrl);
        const response = await axios.get(apiUrl);
        const items = response.data;
        this.setState({
            showTable:false,
            shows: items,
            images: [],
            names: []
        });

            console.log('State set to');
            console.log(this.state.shows);
            let objs = new Array(this.state.shows.length);
            let imgs = new Array(this.state.shows.length);
            let nms = new Array(this.state.shows.length);
            let j= 0;
            for (let i =0; i <this.state.shows.length; i++){
                console.log('show ' + i);
                console.log(this.state.shows[i].show.name);
                if (this.state.shows[i].show.image != null) {
                    console.log(this.state.shows[i].show.image.original);
                    imgs[j] = this.state.shows[i].show.image.original;
                    nms[j] = this.state.shows[i].show.name;
                    j++;
                }
            }



        this.setState({
            showTable:true,
            shows: items,
            images:imgs,
            names:nms
        });

    }

    render() {
        return (
        <div>
            <button
                 onClick={this.getShows}>Search</button>
            {this.state.showTable &&
                <table border={2} cellPadding={5}>
                <thead>
                <tr>

                </tr>
                </thead>
                <tbody>
                {Object.keys(this.state.names).map((item,i)=>(
                    <tr>

                        <td>
                        <img src={this.state.images[i]}></img>
                        </td>
                        <td>{this.state.names[i]}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
        }
        </div>
        )
    }


}



export default ShowTable;

