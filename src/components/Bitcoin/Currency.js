import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from '../NavigationBar';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {connect} from 'react-redux';
import {fetchData, fetchEur, fetchGbp} from '../../actions/index';

class Currency extends Component {
  state = {
    dropdownOpen: false,
  };

  componentDidMount(){
    this.selectUSD();
  }

  selectUSD = async () => {
    await this.props.fetchData();
    this.props.history.push('/bitcoin/usd');
  }

  selectGBP = () => {
    this.props.fetchGbp();
    this.props.history.push('/bitcoin/gbp');
  }

  selectEUR = () => {
    this.props.fetchEur();
    this.props.history.push('/bitcoin/eur');
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  displayGraph = () => {
    this.props.history.push('/bitcoin/analytics',{code: this.props.currencyState.code});
  }

  render() {
    return (
      <React.Fragment>
          <MuiThemeProvider>
            <div>
              <NavigationBar title = 'Bitcoin Pricing'/>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%'}}>
                <h3>Bitcoin Price: {' '}<span onClick={this.displayGraph} style={{color: 'grey'}}> {this.props.currencyState.price} </span></h3>
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

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchData: () => {dispatch(fetchData())},
    fetchEur: () => {dispatch(fetchEur())},
    fetchGbp: () => {dispatch(fetchGbp())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Currency);

