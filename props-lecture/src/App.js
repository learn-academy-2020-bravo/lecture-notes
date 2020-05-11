import React, { Component } from 'react'
import Item from './components/Item'
import WildCard from './components/WildCard'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      // grocery list items
      listItems: ["apples", "yogurt", "cheese", "blueberries", "ice cream"],
      // hardware list items
      hardwareItems: ["lightbulb", "nails", "plant food"],
      // random chore list
      wildCardChore: ["Laundry", "Sweep", "Dust", "Vacuum", "Make bed"],
      // selection of just one chore
      dailyChore: ""
    }
  }

  // method that will select one chore and update the value of dailyChore in state
  addChore = () => {
    let random = Math.floor(Math.random() * this.state.wildCardChore.length)
    this.setState({ dailyChore: this.state.wildCardChore[random] })
  }

  render(){
    return(
      <React.Fragment>
        <h1>To Do List</h1>
        {/* Calling the Item component and passing in two values as props: 1) listItems from state, 2) a string */}
        <Item list={ this.state.listItems } store="Grocery"/>
        {/* Same thing as above, but passing in different values */}
        <Item list={ this.state.hardwareItems } store="Hardware"/>
        <WildCard dailyChore={ this.state.dailyChore }/>
        <button onClick={ this.addChore }>Add Chore</button>
      </React.Fragment>
    )
  }
}
export default App
