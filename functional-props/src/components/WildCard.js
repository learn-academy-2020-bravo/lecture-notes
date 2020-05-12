import React, { Component } from 'react'

class WildCard extends Component{

  // method called onClick
  addChore = () => {
    // array of possible chores
    let wildCardChore = ["Laundry", "Sweep", "Dust"]
    // creating a random number
    let random = Math.floor(Math.random() * wildCardChore.length)
    // calling the method in App.js and passing a random chore as an argument
    this.props.addDailyChore(wildCardChore[random])
  }


  render(){
    return(
      <React.Fragment>
        <h3>Wild Card</h3>
        {/* receiving dailyChore as props from App.js */}
        <p>Today's chore: { this.props.dailyChore }</p>
        {/* calling the addChore method */}
        <button onClick={ this.addChore }>Add Chore</button>
      </React.Fragment>
    )
  }
}
export default WildCard
