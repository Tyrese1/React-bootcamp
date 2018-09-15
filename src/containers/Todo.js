import React, { Component } from 'react'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import './todo.scss'

class Todo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: [],
      todo: {
        title: '',
        description: ''
      },
      error: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  handleChange (e) {
    const name = e.target.name
    const todo = this.state.todo
    todo[name] = e.target.value
    this.setState({ todo, error: false })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { title, description } = this.state.todo
    if (title.trim().length === 0 || description.trim().length === 0) {
      this.setState({ error: true })
    } else {
      const newItem = {
        title,
        description,
        id: Date.now()
      }

      this.setState(prevState => ({
        todos: [...prevState.todos, newItem],
        todo: {
          title,
          description
        }
      }))
    }
  }

  removeItem (todo) {
    const todoItems = this.state.todos.filter(item => item.id !== todo.id)

    this.setState({ todos: todoItems })
  }

  render () {
    return (
      <div id="todo-container-wrappper">
        <TodoForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          text={this.state.text}
        />
        {this.state.error && (
          <span className="error"> You cannot enter an empty todo </span>
        )}
        {this.state.todos.length > 0 && (
          <TodoList todos={this.state.todos} removeItem={this.removeItem} />
        )}
      </div>
    )
  }
}

export default Todo
