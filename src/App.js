import React, { Component } from 'react';
import Welcome from './components/welcome/welcome';
import Clock from './components/clock/clock';
import Contact from './components/contact/contact';
import Navigation from "./components/navigation/navigation";
import { Route, Switch } from "react-router-dom";
import JeopardyContainer from './containers/jeopardy';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Switch>
          <Route exact path="/" render={(props)=><Welcome {...props} name="eric"/>} />
          <Route path="/welcome/:name" component={Welcome} />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route path="/jeopardy" component={JeopardyContainer} />
          <Route render={(props)=><div>There is nothing to see here</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;


