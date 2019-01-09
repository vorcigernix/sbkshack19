import React, { Component, Suspense } from 'react';
import { Grommet } from 'grommet';
import Nav from './components/Nav';
import { Router } from "@reach/router";
import Loading from './Loading';

const Home = React.lazy(() => import('./Home'));
const Mentors = React.lazy(() => import('./Mentors'));

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends Component {
  render() {
    return (
      <div>
      
        <Suspense fallback={<Loading />}>
          <Grommet theme={theme}>
            <Nav />
            <Router>
            <Home path="/" />
            <Mentors path="/mentors" />
            </Router>
          </Grommet>
        </Suspense>
      
      </div>
    );
  }
}

export default App;
