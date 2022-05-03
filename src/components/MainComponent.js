import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import ViewMenu from './MenuComponent';
import About from './AboutComponent';
import { addComment } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
      campsites: state.campsites,
      comments: state.comments,
      partners: state.partners,
      promotions: state.promotions
  };
};

const mapDispatchToProps = {
  addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text))
};

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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
