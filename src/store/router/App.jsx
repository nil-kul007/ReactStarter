import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';

import Header from '../../components/Header';
import Home from '../../container/Home';
import LoginPage from '../../container/login';
import RegisterPage from '../../container/Register';
import UIGuide from '../../container/UIGuide';
import brandConfig from '../../assets/brandName/constants/globalBrandConfig';

const brandConf = brandConfig;
export class App extends Component {

  render() {
    return (
      <div className="app">
        <Header brandConfig={this.props.brandConfig} />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/uiguide" component={UIGuide} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  brandConfig: PropTypes.object,
};

App.defaultProps = {
  brandConfig: brandConf,
};

function mapStateToProps(state) {
  return {
    brandConfig: state.list,
  };
}

export default withRouter(connect(mapStateToProps)(App));
