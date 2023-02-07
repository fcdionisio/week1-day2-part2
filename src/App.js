import React, { Component } from 'react';
import DisplayGrocery from './DisplayGrocery';

class App extends Component {
  state =  [
    {
      prod_id: 1,
      productName: "Tootpaste",
      productPrice: 169.55
    },
    {
      prod_id: 2,
      productName: "Soap",
      productPrice: 88.75
    },
    {
      prod_id: 3,
      productName: "Dog Food",
      productPrice: 129.15
    }
  ]

  render() {
    return (
      <div>
        <DisplayGrocery grocery={this.state} />
      </div>
    );
  }
}

export default App;
