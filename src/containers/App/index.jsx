import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../Home';
import About from '../About';
import Counter from '../Counter';

const App = () => (
  <div>
    <Header links={[
      { title: 'Home', route: '/' },
      { title: 'About', route: '/about-us' },
      { title: 'Counter', route: '/counter' },
    ]}
    />
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/about-us" component={About} />
    </div>
  </div>
);

export default App;
