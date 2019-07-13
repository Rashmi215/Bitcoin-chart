import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import NavigationBar from './NavigationBar';

export default class Login extends Component {
  state={
    username:'',
    password:'',
    disabled:true
  }

  handleClick = () => {
    this.props.history.push('/instructions')
  }

  handleUserNameInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name] : value
    }, this.validationMessage())
    
  }

  handlePasswordInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name] : value
    }, this.validationMessage())
  }


  validationMessage = () => {
    if((this.state.username.includes("@") && this.state.username.includes('.') ) && (this.state.username.length >4 && this.state.password.length >6)){
      this.setState({
        disabled : false
      })
    }
  }
      
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider>
          <div>
            <NavigationBar title = 'Login'/>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange = {(event) => this.handleUserNameInput(event)}
                name = "username"
              />
              <br/>
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {(event) => this.handlePasswordInput(event)}
                name = "password"
                />
              <br/>
              <RaisedButton disabled = {this.state.disabled} label="Submit" primary={true} style={style} onClick={this.handleClick}/>
            </div>
        </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

const style = {
  margin: 15,
};
