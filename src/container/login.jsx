import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import * as Actions from '../actions';
import _ from 'lodash';
import Button from '@material-ui/core/Button';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      password: props.password,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit() {
    this.props.actions.loginDetails(this.state.username, this.state.password);
  }

  render() {
    if (this.props.loginStatus) {
      //Dashboard comes here
      return (<h2>Dashboard comes here</h2>)
    } else {
      return (
        <div className="col-md-offset-7 col-md-5 login-window form-group">
          <span className="label label-danger">{this.props.loginAlert}</span>
          <hr />
          <label htmlFor="username">User Name:</label>
          <input type="text" className="form-control" name="username" placeholder="User Name"
            value={this.state.username}
            onChange={this.handleChange}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                this.handleSubmit()
              }
            }} />

          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" name="password" placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                this.handleSubmit()
              }
            }} />
          <br />
          <Button variant="contained" color="primary">
      Hello World
    </Button>
          <input type="button" className="form-control" value="Submit"
            onClick={() => this.handleSubmit()} />
        </div>
      );
    }

  }
}

LoginPage.defaultProps = {
  username: '',
  password: '',
  loginAlert: '',
  loginStatus: false,
  actions: {
    loginDetails: _.noop,
  },
}

LoginPage.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  loginAlert: PropTypes.string,
  loginStatus: PropTypes.bool,
  actions: PropTypes.shape({
    loginDetails: PropTypes.func,
  })
};

function mapStateToProps(state) {
  return {
    username: state.login.username,
    password: state.login.password,
    loginAlert: state.login.loginAlert,
    loginStatus: state.login.loginstatus,
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loginDetails: Actions.loginDetails,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
