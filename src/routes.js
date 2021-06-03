import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Components/Home';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/login" exact component={} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;