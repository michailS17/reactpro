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
    // Update state to display fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service.
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI.
      return <h1>Something went wrong.</h1>;
    }

    // Render children normally.
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