import React from 'react';
import Header from './Header';

export default class App {

  render() {
    return (
      <main>
        <Header />

        {this.props.children}
      </main>
    );
  }
}
