import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';

import First from './first-component/first-component';
import Second from './second-component/second-component';

class App extends Component {
  
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/first'>First</Link></li>
          <li><Link to='/second'>Second</Link></li>
          <li><Link to='/second/nested1'>1</Link></li>
          <li><Link to='/second/nested2'>2</Link></li>
        </ul>
        {this.props.user.firstName ? <div>{this.props.user.firstName}</div> : null}
        
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    info: state.info
  }
}

export default withRouter(connect(mapStateToProps)(App))