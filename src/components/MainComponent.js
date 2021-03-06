import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import ViewMenu from './MenuComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  
  render() {
    const HomePage = () => {
        return (
          <Home/>
        );
      };

      return (
          <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/viewmenu' component={ViewMenu}/>
                <Route exact path='/location' component={Contact} />
                <Route exact path='/aboutus'  component={About} /> 
                <Redirect to='/home' />
            </Switch>
            <Footer />
          </div>
      );
  }
}

export default Main;
