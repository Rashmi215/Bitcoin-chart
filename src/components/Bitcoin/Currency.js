import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from '../NavigationBar';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';

export default class Currency extends Component {
  state = {
    price: '',
    dropdownOpen: false,
    code: 'USD'
  };

  componentDidMount(){
    this.selectUSD();
  }

  selectUSD = () => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        let price = response.data.bpi.USD.rate;
        let symbol = response.data.bpi.USD.code;
        this.setState({ price: price + ' ' + symbol, code: symbol })
      });
  }

  selectGBP = () => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {
      let price = response.data.bpi.GBP.rate;
      let symbol = response.data.bpi.GBP.code;
      this.setState({ price: price + ' ' + symbol, code: symbol })
    });
  }

  selectEUR = () => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {
      let price = response.data.bpi.EUR.rate;
      let symbol = response.data.bpi.EUR.code;
      this.setState({ price: price + ' ' + symbol, code: symbol })
    })
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  displayGraph = () => {
    this.props.history.push('/bitcoin/analytics')
  }

  render() {
    return (
      <React.Fragment>
          <MuiThemeProvider>
            <div>
              <NavigationBar title = 'Bitcoin Pricing'/>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%'}}>
                <h3>Bitcoin Price: {' '}<span onClick={this.displayGraph} style={{color: 'grey'}}> {this.state.price} </span></h3>
              </div>
              <div style = {{ display: 'flex', justifyContent: 'center', marginTop: '3%'}}>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret color="success"> Select Currency ({this.state.code}) </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={this.selectUSD}> USD </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.selectGBP}> GBP </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.selectEUR}> EUR </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
            </div>
          </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

