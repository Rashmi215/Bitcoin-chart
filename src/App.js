import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginScreen from './components/LoginScreen';
import Instructions from './components/Instructions';
import Currency from './components/Bitcoin/Currency';
import Analytics from './components/Bitcoin/Analytics';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route path='/bitcoin/analytics' component={Analytics}/>
          <Route path='/bitcoin/currency' component={Currency}/>
          <Route path='/instructions' component={Instructions}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
