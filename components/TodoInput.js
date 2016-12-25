import React, { Component } from 'react'

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
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
        <button>Submit</button>
      </div>
    )
  }

}

export default TodoInput
