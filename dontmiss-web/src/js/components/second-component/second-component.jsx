import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nested1 from '../nested1-component/nested1-component';
import Nested2 from '../nested2-component/nested2-component';

export default class SecondComponent extends Component {
  render() {
    return (<div>
      <div>Component 2</div>

      <Route path="/second/nested1" component={Nested1} />
      <Route path="/second/nested2" component={Nested2} />
    </div>);
  }
}