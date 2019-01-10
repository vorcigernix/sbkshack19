import React, { Component, Suspense } from 'react';
import { Grommet } from 'grommet';
import Nav from './components/Nav';
import { Router } from "@reach/router";
import Loading from './Loading';

const Home = React.lazy(() => import('./Home'));
const Mentors = React.lazy(() => import('./Mentors'));

const theme = {
  global: {
    colors: {
      brand: '#96285F',
      dark: '#2F3744',
      rhino: '#7B8694'
    },
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


        <Grommet theme={theme}>
          <Nav />
          <Suspense fallback={<Loading />}>
            <Router>
              <Home path="/" />
              <Mentors path="/mentors" />
            </Router>
          </Suspense>
        </Grommet>

      </div>

    );
  }
}

export default App;
