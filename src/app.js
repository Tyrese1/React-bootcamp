import React, { Component } from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import home from "./components/home"
import todo from "./components/todo"
import error from "./components/error"
import navigation from "./components/navigation"

class App extends Component {
  render() {
    return (
      <BrowserRouter>               
          <Switch>
            <Route path="/" component={home} exact />
            <Route path="/todo" component={todo} />
            <Route path="/nav" component={navigation} />           
            <Route component={error} />
          </Switch>     
      </BrowserRouter>
    );
  }
}

export default App;
