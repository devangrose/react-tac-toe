import React, { Component } from 'react';

class Square extends Component {

  render(props) {
    return (
      <button class={this.props.value} onClick={() => this.props.onClick()}>
        
      </button>
    )
  } 
}

export default Square;
