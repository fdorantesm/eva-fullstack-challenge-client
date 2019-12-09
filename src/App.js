import React, {Component} from 'react';
import AppRouter from './routers/AppRouter';
import {connect} from 'react-redux';
import {restoreSession} from './store/auth/authActions';

class App extends Component {
  componentDidMount() {
    if (!this.props.auth._id) {
      // this.props.restoreSession();
    }
  }
  render() {
    return (<AppRouter/>);
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  restoreSession: (email, password) => dispatch(restoreSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
