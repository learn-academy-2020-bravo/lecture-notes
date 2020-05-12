import React, { Component } from 'react'

class Colorbox extends Component{
  constructor(props){
    super(props)
    this.state = {
      colors: ["red", "orange", "yellow", "green", "blue", "purple", "pink", "aqua"],
      currentColor: "white",
      currentIndex: 0
    }
  }

  changeColor = () => {
    // random color generator
    // let randomIndex = Math.floor(Math.random() * this.state.colors.length)
    // this.setState({ currentColor: this.state.colors[randomIndex]})

    // cycle of colors
    let { currentIndex, colors, } = this.state
    if(currentIndex < colors.length){
      this.setState({
        currentIndex: currentIndex + 1,
        currentColor: colors[currentIndex]
      })
    } else {
      this.setState({
        currentIndex: 1,
        currentColor: colors[0]
      })
    }
  }

  render(){
    return(
      <React.Fragment>
        <div
          id="box"
          style={{ backgroundColor: this.state.currentColor }}
          onClick={ this.changeColor }
        >
          { this.state.currentColor }
        </div>
      </React.Fragment>
    )
  }
}
export default Colorbox
