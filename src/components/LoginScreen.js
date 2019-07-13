import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import NavigationBar from './NavigationBar';

export default class Login extends Component {
  state={
    username:'',
    password:''
  }

  handleClick = () => {
    this.props.history.push('/instructions')
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
                onChange = {text => this.setState({username:text})}
              />
              <br/>
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {text => this.setState({password:text})}
                />
              <br/>
              <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleClick}/>
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
