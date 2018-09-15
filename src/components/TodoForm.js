import React from 'react'

const TodoForm = props => (
  <form onSubmit={props.handleSubmit} id="todo-form">
    <label htmlFor="todo" />
    <input
      id="todo"
      name="title"
      value={props.text}
      onChange={props.handleChange}
    />
    <label htmlFor="description" />
    <input
      id="descriotion"
      name="description"
      value={props.description}
      onChange={props.handleChange}
    />
    <button>Add Item</button>
  </form>
)

export default TodoForm
