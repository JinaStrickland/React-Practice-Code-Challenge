import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    budget: 100,
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({ sushis: sushis }))
  }

  eatSushiClick = (theSushi) => {
    let sushis = [...this.state.sushis]
    sushis.find(sushi => {
      if (sushi.id === theSushi.id && this.state.budget >= theSushi.price) {
        this.setState({
          eaten: [...this.state.eaten, theSushi],
          budget: this.state.budget - theSushi.price 
        })
      }
    })
  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer sushis={ this.state.sushis }
                        eatSushiClick={ this.eatSushiClick }
                        eaten={ this.state.eaten } />
        <Table  eaten={ this.state.eaten }
                budget={ this.state.budget } />
      </div>
    );
  }
}

export default App;


