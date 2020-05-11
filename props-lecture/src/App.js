import React, { Component } from 'react'
import Item from './components/Item'
import WildCard from './components/WildCard'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      listItems: ["apples", "yogurt", "cheese", "blueberries", "ice cream"],
      hardwareItems: ["lightbulb", "nails", "plant food"],
      wildCardChore: ["Laundry", "Sweep", "Dust", "Vacuum", "Make bed"],
      dailyChore: ""
    }
  }

  addChore = () => {
    let random = Math.floor(Math.random() * this.state.wildCardChore.length)
    this.setState({ dailyChore: this.state.wildCardChore[random] })
  }

  render(){
    return(
      <React.Fragment>
        <h1>To Do List</h1>
        <Item list={ this.state.listItems } store="Grocery"/>
        <Item list={ this.state.hardwareItems } store="Hardware"/>
        <WildCard dailyChore={ this.state.dailyChore }/>
        <button onClick={ this.addChore }>Add Chore</button>
      </React.Fragment>
    )
  }
}
export default App
