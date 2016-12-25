import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(actions.addTodo(this.state.inputText))
  }

  render() {
    const text = this.state.inputText
    return (
      <div>
        <input
          type="text"
          placeholder="Insert todo"
          value={text}
          onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }

}

export default TodoInput
