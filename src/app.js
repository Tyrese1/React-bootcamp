import React, { Component } from 'react'
import Todo from './containers/Todo'
import { BrowserRouter, Route } from 'react-router-dom' 
import newRoute from './components/newRoute' 

class App extends Component {
  render () {
    return (
     
      <BrowserRouter>
      
      <div id="root-container">
      <Route path="/new" component ={newRoute} exact />
        <h1 id="__welcome-header">Welcome!</h1>
        <hr />
        <Todo />
      </div>
      </BrowserRouter>
      
     
    )
  }
}

export default App
