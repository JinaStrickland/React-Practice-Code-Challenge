import React, { Component, Fragment } from 'react';
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {

  state = {
    limit: 0,
  }

  more = () => {
    this.setState({
      limit: this.state.limit + 4
    })
  }

  render() {

    return (
      <Fragment>
        <div className="belt">
          { this.props.sushis.slice(this.state.limit, this.state.limit + 4).map(
              sushi => <Sushi  key={ sushi.id }
                               sushi={ sushi }
                               eatSushiClick={ this.props.eatSushiClick }
                               eaten={ this.props.eaten } />)}
          <MoreButton more={ this.more } />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer