import React, { Component } from 'react'

class Item extends Component{

  render(){

    let eachItem = this.props.list.map(item => {
      return(
        <li>{ item }</li>
      )
    })


    return(
      <React.Fragment>
        <h3>{ this.props.store} Items</h3>
        <ul>
          { eachItem }
        </ul>
      </React.Fragment>
    )
  }
}
export default Item
