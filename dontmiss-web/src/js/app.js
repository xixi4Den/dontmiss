import React, { Component } from 'react';
import { render } from 'react-dom';

import '../styles/main.scss';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));