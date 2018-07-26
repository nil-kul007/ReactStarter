import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Logo from '../assets/brandName/images/logo.png';

const Header = (props) => {
    return (
      <div>
        <div className="container">
          <img src={Logo} alt="logo" className="company_logo" />
          <div className="header-title">
            <h1>{props.brandConfig.brandtitle}</h1>
            <h3>{props.brandConfig.brandsubtitle}</h3>
          </div>
        </div>

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              {/* <a href="/"><img src={Logo} alt="logo" className="company_logo_icon" /></a> */}
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/list">List</Link>
                </li>
                <li>
                <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/deals">Deals</Link>
                </li>
                <li>
                  <Link to="stores">Stores</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/register">
                    <span className="glyphicon glyphicon-user" /> Register
                  </Link>
                </li>
                <li>
                <Link to="/login">
                    <span className="glyphicon glyphicon glyphicon-lock" /> Log
                    in
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

Header.propTypes = {
  brandtitle: PropTypes.object,
  brandConfig: {}
};

// 'withRouter' makes router state available to the wrapped component.
// See: https://reacttraining.com/react-router/web/api/withRouter
export default Header;
