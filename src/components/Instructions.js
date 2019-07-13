import React , { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from './NavigationBar';

export default class Instructions extends Component {
  
  state = {
    checked : false
  }

  handleCheckboxInputChange = () => {
    this.setState({
      checked : !this.state.checked
    })
  }

  clickContinue = () => {
    this.props.history.push('/bitcoin/currency');
  }

  render(){
    return(
      <div style = {style.parentDiv}>
        <MuiThemeProvider>
          <NavigationBar title = 'Instuctions'/>
        </MuiThemeProvider>
        <h5 style = {style.instructionsHeading}>Terms of Service</h5>
        <div style = {style.instructionsBody}>
            <ol style = {style.instructionBodyList}>
              <li style = {style.listItem}>The default price of a bitcoin will be displayed in USD.</li>
              <li style = {style.listItem}>In order to change the price of a bitcoin in any currency other than USD
                then select your currency from the drop down provided.
              </li>
              <li style = {style.listItem}>If one clicks on the bitcoin price then another page will be rendered showing the
                trend of bitcoin pricing in last 30 days.
              </li>
            </ol>
            <div style = {style.noteContainer}>
              <b style = {style.noteTextOne}>The bitcoin price mapped to the different currencies are near actual but any
                discrepancy in the price </b>
              <b style = {style.noteTextTwo}>may be influenced by the market standards.</b>
            </div>
        </div>
        <div style = {style.checkBox}>
          <form>
            <input type = "checkbox" style = {style.checkBox} onChange = {this.handleCheckboxInputChange}/>I agree to the terms and conditions  
            <br/><br/>
            <button disabled = {!this.state.checked} style = {style.continueButtonEnabled} onClick={this.clickContinue}>CONTINUE</button>  
          </form>
        </div>
      </div>
    )
  }
}


const style = {
  instructionsHeading : {
      textAlign: 'center',
      paddingTop : '5%',
  },
  instructionBodyList :{
    marginTop : '5%',
    marginLeft : '10%',
  },
  checkBox : {
    marginLeft: '6%',
    marginRight: '1%',
    marginTop: '2%'
  },
  noteTextOne : {
    marginTop : '13%',
    marginLeft : '20%',
  },
  noteTextTwo : {
    marginLeft : '40%'
  },
  continueButtonEnabled : {
    marginLeft : '45%',
    marginTop : '7%',
    backgroundColor : 'blue',
    text : 'white',
    borderRadius : '8px',
    border: '2px solid black'
  },
  listItem : {
    lineHeight : '2.5'
  },
  noteContainer : {
    width : '80%'
  }
}
