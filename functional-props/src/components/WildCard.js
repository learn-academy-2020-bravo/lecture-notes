import React, { Component } from 'react'

class WildCard extends Component{

  addChore = () => {
    let wildCardChore = ["Laundry", "Sweep", "Dust"]
    let random = Math.floor(Math.random() * wildCardChore.length)
    this.props.addDailyChore(wildCardChore[random])
  }


  render(){
    return(
      <React.Fragment>
        <h3>Wild Card</h3>
        <p>Today's chore: { this.props.dailyChore }</p>
        <button onClick={ this.addChore }>Add Chore</button>
      </React.Fragment>
    )
  }
}
export default WildCard
