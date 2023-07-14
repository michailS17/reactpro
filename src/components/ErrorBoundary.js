import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigationpage';
import Login from './components/Loginpage';
import Registration from './components/Registrationpage';
import Profile from './components/Profilepage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
   
    return { hasError: true };
  }

  componentDidCatch(error, info) {
   
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
     
      return <h1>Something went wrong.</h1>;
    }

    
    return this.props.children;
  }
}

const App = () => {
  return (
    <Router>
      <div>
        <ErrorBoundary>
          <Navigation />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </ErrorBoundary>
      </div>
    </Router>
  );
};

export default App;