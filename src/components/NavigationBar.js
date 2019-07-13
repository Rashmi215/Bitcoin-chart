import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

export default class NavigationBar extends Component {
  render(){
    return(
      <React.Fragment>
        <AppBar title = {this.props.title}/> 
      </React.Fragment>
    ) 
  }
}