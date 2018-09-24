import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

const home = () => {
  return (
  <div id="root-container">
    <Link to='/todo'>Add a note</Link>
  </div>
  
  
  );
}

export default home