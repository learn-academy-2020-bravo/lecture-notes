import React, { Component } from 'react'
import WildCard from './components/WildCard'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      dailyChore: ""
    }
  }

  addDailyChore = (chore) => {
    this.setState({ dailyChore: chore })
  }


  render(){
    return(
      <React.Fragment>
        <h1>To Do App</h1>
        <WildCard
          addDailyChore={ this.addDailyChore }
          dailyChore={ this.state.dailyChore }
        />
      </React.Fragment>
    )
  }
}
export default App
