import React from 'react';
import Header from './Header';

export default class App extends React.Component {

  render() {
    return (
      <main>
        <Header />

        {this.props.children}
      </main>
    );
  }
}
