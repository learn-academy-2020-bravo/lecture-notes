import React, { Component } from 'react'
import WildCard from './components/WildCard'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    // state object that holds the one daily chore that is selected from the array of options in WildCard
    this.state = {
      dailyChore: ""
    }
  }

  // this method gets passed as props to WildCard and gets called by a method in WildCard which passes an argument of one chore from the array
  addDailyChore = (chore) => {
    this.setState({ dailyChore: chore })
  }


  render(){
    return(
      <React.Fragment>
        <h1>To Do App</h1>
        {/* Wild Card component call, passing two values as props*/}
        <WildCard
          addDailyChore={ this.addDailyChore }
          dailyChore={ this.state.dailyChore }
        />
      </React.Fragment>
    )
  }
}
export default App
