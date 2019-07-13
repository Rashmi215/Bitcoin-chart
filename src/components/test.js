import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from '../NavigationBar';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import {connect} from 'react-redux';

class Currency extends Component {
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
        let rate = response.data.bpi.USD.rate;
        let symbol = response.data.bpi.USD.code;
        this.setState({ price: rate + ' ' + symbol, code: symbol }, () => {
          this.props.history.push('/bitcoin/usd')
        })
      });
  }

  selectGBP = (e) => {
    // console.log('e', e.currentTarget.textContent)
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {
      let rate = response.data.bpi.GBP.rate;
      let symbol = response.data.bpi.GBP.code;
      this.setState({ price: rate + ' ' + symbol, code: symbol }, () => {
        this.props.history.push('/bitcoin/gbp')
      })
    });
  }

  selectEUR = () => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {
      let rate = response.data.bpi.EUR.rate;
      let symbol = response.data.bpi.EUR.code;
      this.setState({ price: rate + ' ' + symbol, code: symbol }, () => {
        this.props.history.push('/bitcoin/eur')
      })
    })
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  displayGraph = () => {
    this.props.history.push('/bitcoin/analytics',{code: this.state.code});
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
                  <DropdownToggle caret color="success"> Select Currency ({this.props.currencyState.code}) </DropdownToggle>
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

const mapStateToProps = state => {
  return {
    currencyState: state.currencyState
  };
}

export default connect(mapStateToProps)(Currency);

