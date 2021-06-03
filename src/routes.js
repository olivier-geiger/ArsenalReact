import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Components/Home';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Signin from './Components/Signin';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/login" exact component={Signin} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;