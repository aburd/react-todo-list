import React, { Component } from 'react'

class TodoListItem extends Component {

  constructor(props, context) {
    super(props, context)

  }

  render() {
    return (
      <li>
        ID: {this.props.id} <br/>
        Text: {this.props.text}
      </li>
    )
  }

}

export default TodoListItem