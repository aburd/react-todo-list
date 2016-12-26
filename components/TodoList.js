import React, { Component } from 'react'
import TodoListItem from './TodoListItem'

class TodoList extends Component {

  constructor(props, context) {
    super(props, context)

    this.todoItems = this.todoItems.bind(this)
  }

  todoItems(todos) {
  	return todos.map((todo) => {
  		return (
  			<TodoListItem actions={this.props.actions} key={todo.id} text={todo.text} id={todo.id} />
  		)
  	})
  }

  render() {
    return (
      <ul>
      	{this.todoItems(this.props.todos)}
      </ul>
    )
  }

}

export default TodoList
