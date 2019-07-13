import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from '../NavigationBar';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar} from "recharts";
import axios from 'axios';

export default class Analytics extends Component {
  state = {
    data: []
  }

  componentDidMount(){
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?currency=GBP')
      .then(response => {
        let obj = response.data.bpi;
        for (let key in obj){
          this.setState({ data: [...this.state.data, {x: key, y: obj[key]}]})
        }
      });
  }
  render(){
    const {data} = this.state;
    return(
      <div>
        <MuiThemeProvider>
          <NavigationBar title = 'Analytics'/>
        </MuiThemeProvider>
        <div>
          <BarChart
            width={1200}
            height={600}
            data={data}
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="4 3" />
            <XAxis dataKey="x" />
            <YAxis dataKey="y"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="y" fill="pink" />
          </BarChart>
        </div>
      </div>
    );
  }
}