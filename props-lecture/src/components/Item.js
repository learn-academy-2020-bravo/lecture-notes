import React, { Component } from 'react'

class Item extends Component{

  render(){
    // list is an array that comes from App as props
    let eachItem = this.props.list.map(item => {
      return(
        // each item can be returned as a JSX list item
        <li>{ item }</li>
      )
    })


    return(
      <React.Fragment>
      {/* store comes from App as props */}
        <h3>{ this.props.store} Items</h3>
        {/* each item from the array gets passed into the unordered list */}
        <ul>
          { eachItem }
        </ul>
      </React.Fragment>
    )
  }
}
export default Item
