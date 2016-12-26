import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoListItem extends Component {

  constructor(props, context) {
    super(props, context)

    this.handleComplete = this.handleComplete.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleComplete() {
    this.props.actions.completeTodo(this.props.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.id)
  }

  render() {
    return (
      <li>
        ID: {this.props.id} <br/>
        Text: {this.props.text}
        <button onClick={this.handleComplete}>Mark as finished</button>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    )
  }

}

export default TodoListItem