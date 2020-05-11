import React, { Component } from 'react'

class WildCard extends Component{
  render(){
    return(
      <React.Fragment>
        <h3>Wild Card Chore</h3>
        <p>Today's chore: { this.props.dailyChore }</p>
      </React.Fragment>
    )
  }
}
export default WildCard
