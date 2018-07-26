import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import * as Actions from '../actions';

class RegisterPage extends Component {
  
  render() {
      return(
      <h1>Register Page</h1>
    )}
}

RegisterPage.defaultProps = {
  firstname: '',
  lastname: '',
  username: '',
  password:'',
  passwordre: '',
  loginStatus: false,
  actions: {
    submit_register: _.noop,
  },
}

RegisterPage.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    passwordre: PropTypes.string,
    loginStatus: PropTypes.bool,
  actions: PropTypes.shape({
    submit_register: PropTypes.func,
  })
};

function mapStateToProps(state) {
  return {
    firstname: state.register.firstname,
    lastname: state.register.lastname,
    username: state.register.username,
    password: state.register.password,
    passwordre: state.register.passwordre,
    loginStatus: state.register.loginStatus,
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    submit_register: Actions.submitRegister,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
