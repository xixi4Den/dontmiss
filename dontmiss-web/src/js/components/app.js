import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
    <div>
      {this.props.user.firstName ? <div>{this.props.user.firstName}</div> : null}
    </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    info: state.info
  }
}

export default connect(mapStateToProps)(App)